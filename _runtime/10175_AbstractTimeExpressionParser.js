// _runtime/10175_AbstractTimeExpressionParser.js
import Meridiem from "10166_Meridiem.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class AbstractTimeExpressionParser {
  constructor() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    _classCallCheck(this, AbstractTimeExpressionParser);
    this.cachedPrimaryPrefix = null;
    this.cachedPrimarySuffix = null;
    this.cachedPrimaryTimePattern = null;
    this.cachedFollowingPhase = null;
    this.cachedFollowingSuffix = null;
    this.cachedFollowingTimePatten = null;
    this.strictMode = flag;
  }
}
const entry = {
  key: "patternFlags",
  value: function patternFlags() {
    return "i";
  },
};
const items = [
  entry,
  {
    key: "primaryPatternLeftBoundary",
    value: function primaryPatternLeftBoundary() {
      return "(^|\\s|T|\\b)";
    },
  },
  {
    key: "primarySuffix",
    value: function primarySuffix() {
      return "(?!/)(?=\\W|$)";
    },
  },
  {
    key: "followingSuffix",
    value: function followingSuffix() {
      return "(?!/)(?=\\W|$)";
    },
  },
  {
    key: "pattern",
    value: function pattern(arg0) {
      return this.getPrimaryTimePatternThroughCache();
    },
  },
  {
    key: "extract",
    value: function extract(createParsingResult, index) {
      const self = this;
      const result = this.extractPrimaryTimeComponents(createParsingResult, index);
      if (result) {
        const sum = index.index + index[1].length;
        const str2 = index[0];
        const str3 = str2.substring(index[1].length);
        const parsingResult = createParsingResult.createParsingResult(sum, str3, result);
        index.index = index.index + index[0].length;
        const str4 = createParsingResult.text;
        const substr = str4.substring(index.index);
        const followingTimePatternThroughCache = self.getFollowingTimePatternThroughCache();
        const match = followingTimePatternThroughCache.exec(substr);
        if (str3.match(/^\d{3,4}/)) {
          if (match) {
            const str5 = match[0];
            if (str5.match(/^\s*([+-])\s*\d{2,4}$/)) {
              return null;
            } else {
              const str6 = match[0];
              if (str6.match(/^\s*([+-])\s*\d{2}\W\d{2}/)) {
                return null;
              }
            }
          }
        }
        if (match) {
          let result1;
          const str7 = match[0];
          if (!str7.match(/^\s*([+-])\s*\d{3,4}$/)) {
            parsingResult.end = self.extractFollowingTimeComponents(createParsingResult, match, parsingResult);
            if (parsingResult.end) {
              parsingResult.text = parsingResult.text + match[0];
            }
            result1 = self.checkAndReturnWithFollowingPattern(parsingResult);
          }
          return result1;
        }
        result1 = self.checkAndReturnWithoutFollowingPattern(parsingResult);
      } else {
        const str = index[0];
        index = index.index;
        if (str.match(/^\d{4}/)) {
          index.index = index + 4;
        } else {
          index.index = index + index[0].length;
        }
        return null;
      }
    },
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(createParsingComponents, arg1) {
      const parsingComponents = createParsingComponents.createParsingComponents();
      const parsed = parseInt(arg1[2]);
      let rounded = parsed;
      let num = 0;
      if (parsed > 100) {
        if (4 == arg1[2].length) {
          if (null == arg1[3]) {
            if (!arg1[6]) {
              return null;
            }
          }
        }
        const self = this;
        if (!this.strictMode) {
          if (null == arg1[3]) {
            num = parsed % 100;
            const _Math = Math;
            rounded = Math.floor(parsed / 100);
          }
        }
        return null;
      }
      if (rounded > 24) {
        return null;
      } else {
        if (null != arg1[3]) {
          if (1 == arg1[3].length) {
            if (!arg1[6]) {
              return null;
            }
          }
          const _parseInt = parseInt;
          num = parseInt(arg1[3]);
        }
        if (num >= 60) {
          return null;
        } else {
          let PM1 = null;
          if (rounded > 12) {
            PM1 = Meridiem.Meridiem.PM;
          }
          let tmp8 = rounded;
          let tmp9 = PM1;
          if (null != arg1[6]) {
            if (rounded > 12) {
              return null;
            } else {
              const str10 = arg1[6][0];
              const formatted = str10.toLowerCase();
              let tmp12 = rounded;
              if ("a" == formatted) {
                let num5 = rounded;
                const AM = Meridiem.Meridiem.AM;
                if (12 == rounded) {
                  num5 = 0;
                }
                tmp12 = num5;
                PM1 = AM;
              }
              tmp9 = PM1;
              tmp8 = tmp12;
              if ("p" == formatted) {
                let sum = tmp12;
                const PM = Meridiem.Meridiem.PM;
                if (12 != tmp12) {
                  sum = tmp12 + 12;
                }
                tmp8 = sum;
                tmp9 = PM;
              }
            }
          }
          parsingComponents.assign("hour", tmp8);
          parsingComponents.assign("minute", num);
          if (null !== tmp9) {
            parsingComponents.assign("meridiem", tmp9);
          } else if (tmp8 < 12) {
            parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
          } else {
            parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
          }
          if (null != arg1[5]) {
            const _parseInt2 = parseInt;
            const str7 = arg1[5];
            const parsed1 = parseInt(str7.substring(0, 3));
            if (parsed1 >= 1000) {
              return null;
            } else {
              parsingComponents.assign("millisecond", parsed1);
            }
          }
          if (null != arg1[4]) {
            const _parseInt3 = parseInt;
            const parsed2 = parseInt(arg1[4]);
            if (parsed2 >= 60) {
              return null;
            } else {
              parsingComponents.assign("second", parsed2);
            }
          }
          return parsingComponents;
        }
      }
    },
  },
  {
    key: "extractFollowingTimeComponents",
    value: function extractFollowingTimeComponents(createParsingComponents, arg1, start) {
      let num6;
      let rounded;
      let start10;
      let start11;
      const parsingComponents = createParsingComponents.createParsingComponents();
      if (null != arg1[5]) {
        const _parseInt = parseInt;
        const str = arg1[5];
        const parsed = parseInt(str.substring(0, 3));
        if (parsed >= 1000) {
          return null;
        } else {
          parsingComponents.assign("millisecond", parsed);
        }
      }
      if (null != arg1[4]) {
        const _parseInt2 = parseInt;
        const parsed1 = parseInt(arg1[4]);
        if (parsed1 >= 60) {
          return null;
        } else {
          parsingComponents.assign("second", parsed1);
        }
      }
      const parsed2 = parseInt(arg1[2]);
      if (null != arg1[3]) {
        const _parseInt3 = parseInt;
        num6 = parseInt(arg1[3]);
        rounded = parsed2;
      } else {
        num6 = 0;
        rounded = parsed2;
        if (parsed2 > 100) {
          num6 = parsed2 % 100;
          const _Math = Math;
          rounded = Math.floor(parsed2 / 100);
        }
      }
      if (num6 < 60) {
        if (rounded <= 24) {
          let num7 = -1;
          if (rounded >= 12) {
            num7 = Meridiem.Meridiem.PM;
          }
          let tmp10 = num7;
          let tmp11 = rounded;
          if (null != arg1[6]) {
            if (rounded > 12) {
              return null;
            } else {
              const str13 = arg1[6][0];
              const formatted = str13.toLowerCase();
              let tmp15 = rounded;
              if ("a" == formatted) {
                let num8 = rounded;
                const AM = Meridiem.Meridiem.AM;
                if (12 == rounded) {
                  num8 = 0;
                  if (!parsingComponents.isCertain("day")) {
                    parsingComponents.imply("day", parsingComponents.get("day") + 1);
                    num8 = 0;
                  }
                }
                tmp15 = num8;
                num7 = AM;
              }
              let tmp16 = tmp15;
              if ("p" == formatted) {
                let sum = tmp15;
                const PM = Meridiem.Meridiem.PM;
                if (12 != tmp15) {
                  sum = tmp15 + 12;
                }
                tmp16 = sum;
                num7 = PM;
              }
              start = start.start;
              tmp10 = num7;
              tmp11 = tmp16;
              if (!start.isCertain("meridiem")) {
                if (num7 == Meridiem.Meridiem.AM) {
                  const start4 = start.start;
                  start4.imply("meridiem", Meridiem.Meridiem.AM);
                  const start5 = start.start;
                  tmp10 = num7;
                  tmp11 = tmp16;
                  if (12 == start5.get("hour")) {
                    const start6 = start.start;
                    start6.assign("hour", 0);
                    tmp10 = num7;
                    tmp11 = tmp16;
                  }
                } else {
                  const start2 = start.start;
                  start2.imply("meridiem", Meridiem.Meridiem.PM);
                  const start3 = start.start;
                  tmp10 = num7;
                  tmp11 = tmp16;
                  if (12 != start3.get("hour")) {
                    ({ start: start10, start: start11 } = start);
                    start10.assign("hour", start11.get("hour") + 12);
                    tmp10 = num7;
                    tmp11 = tmp16;
                  }
                }
              }
            }
          }
          parsingComponents.assign("hour", tmp11);
          parsingComponents.assign("minute", num6);
          if (tmp10 >= 0) {
            parsingComponents.assign("meridiem", tmp10);
          } else {
            const start12 = start.start;
            if (start12.isCertain("meridiem")) {
              const start7 = start.start;
              if (start7.get("hour") > 12) {
                const start8 = start.start;
                if (start8.get("hour") - 12 > tmp11) {
                  parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
                } else if (tmp11 <= 12) {
                  parsingComponents.assign("hour", tmp11 + 12);
                  parsingComponents.assign("meridiem", Meridiem.Meridiem.PM);
                }
              }
            }
            if (tmp11 > 12) {
              parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
            } else if (tmp11 <= 12) {
              parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
            }
          }
          const start9 = start.start;
          const dateResult = parsingComponents.date();
          const time = dateResult.getTime();
          const dateResult1 = start9.date();
          if (time < dateResult1.getTime()) {
            parsingComponents.imply("day", parsingComponents.get("day") + 1);
          }
          return parsingComponents;
        }
      }
      return null;
    },
  },
  {
    key: "checkAndReturnWithoutFollowingPattern",
    value: function checkAndReturnWithoutFollowingPattern(parsingResult) {
      const str = parsingResult.text;
      if (str.match(/^\d$/)) {
        return null;
      } else {
        const str2 = parsingResult.text;
        if (str2.match(/^\d\d\d+$/)) {
          return null;
        } else {
          const str3 = parsingResult.text;
          if (str3.match(/\d[apAP]$/)) {
            return null;
          } else {
            const str4 = parsingResult.text;
            const match = str4.match(/[^\d:.](\d[\d.]+)$/);
            if (match) {
              const self = this;
              if (this.strictMode) {
                return null;
              } else {
                if (match[1].includes(".")) {
                  if (!match[1].match(/\d(\.\d{2})+$/)) {
                    return null;
                  }
                }
                const _parseInt = parseInt;
                if (parseInt(match[1]) > 24) {
                  return null;
                }
              }
            }
            return parsingResult;
          }
        }
      }
    },
  },
  {
    key: "checkAndReturnWithFollowingPattern",
    value: function checkAndReturnWithFollowingPattern(parsingResult) {
      const str = parsingResult.text;
      if (str.match(/^\d+-\d+$/)) {
        return null;
      } else {
        const str2 = parsingResult.text;
        const match = str2.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
        if (match) {
          const self = this;
          if (this.strictMode) {
            return null;
          } else {
            if (match[2].includes(".")) {
              if (!match[2].match(/\d(\.\d{2})+$/)) {
                return null;
              }
            }
            const _parseInt = parseInt;
            const _parseInt2 = parseInt;
            const parsed = parseInt(str3);
            return null;
          }
        }
        return parsingResult;
      }
    },
  },
  {
    key: "getPrimaryTimePatternThroughCache",
    value: function getPrimaryTimePatternThroughCache() {
      const self = this;
      const primaryPrefixResult = this.primaryPrefix();
      const primarySuffixResult = this.primarySuffix();
      const tmp3 = this.cachedPrimaryPrefix === primaryPrefixResult && self.cachedPrimarySuffix === primarySuffixResult;
      if (!tmp3) {
        const result = self.primaryPatternLeftBoundary();
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const patternFlagsResult = self.patternFlags();
        const regExp = new RegExp(
          "" +
            result +
            primaryPrefixResult +
            "(\\d{1,4})(?:(?:\\.|:|\uFF1A)(\\d{1,2})(?:(?::|\uFF1A)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?" +
            primarySuffixResult,
          patternFlagsResult,
        );
        self.cachedPrimaryTimePattern = regExp;
        self.cachedPrimaryPrefix = primaryPrefixResult;
        self.cachedPrimarySuffix = primarySuffixResult;
      }
      return self.cachedPrimaryTimePattern;
    },
  },
  {
    key: "getFollowingTimePatternThroughCache",
    value: function getFollowingTimePatternThroughCache() {
      const self = this;
      const followingPhaseResult = this.followingPhase();
      const followingSuffixResult = this.followingSuffix();
      const tmp3 =
        this.cachedFollowingPhase === followingPhaseResult && self.cachedFollowingSuffix === followingSuffixResult;
      if (!tmp3) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const regExp = new RegExp(
          "^(" +
            followingPhaseResult +
            ")(\\d{1,4})(?:(?:\\.|\\:|\\\uFF1A)(\\d{1,2})(?:(?:\\.|\\:|\\\uFF1A)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?" +
            followingSuffixResult,
          "i",
        );
        self.cachedFollowingTimePatten = regExp;
        self.cachedFollowingPhase = followingPhaseResult;
        self.cachedFollowingSuffix = followingSuffixResult;
      }
      return self.cachedFollowingTimePatten;
    },
  },
];
const AbstractTimeExpressionParser_export = _createClass(AbstractTimeExpressionParser, items);

export { AbstractTimeExpressionParser_export as AbstractTimeExpressionParser };
