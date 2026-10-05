// === Module 12831: Badges ===

// Module 12831 (Badges)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import utils from "utils" /* 7818 */;
import TrophyIcon from "TrophyIcon" /* 8364 */;
import GameControllerIcon from "GameControllerIcon" /* 8739 */;
import FireIcon from "FireIcon" /* 9407 */;
import TimerIcon2 from "TimerIcon" /* 11227 */;
import RetryIcon from "RetryIcon" /* 11364 */;
import useTimestampTickedNow from "useTimestampTickedNow" /* 12829 */;
import NewUserIcon from "NewUserIcon" /* 12832 */;
import FlashIcon2 from "FlashIcon" /* 12834 */;
import TrendingType from "TrendingType" /* 12836 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { overlay: obj2, "user-profile": obj3 };
obj2 = { text: "content-inventory-overlay-text-secondary", icon: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
obj3 = { text: "text-subtle", icon: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles((arg0) => {
  let obj3;
  let tmp = null;
  obj = { icon: { width: 16, height: 16 }, badgeContainer: obj3 };
  if ("overlay" === arg0) {
    tmp = { backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: 10, borderRadius: nativeDefault.radii.sm };
    const obj2 = { backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: 10, borderRadius: nativeDefault.radii.sm };
  }
  obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
  const merged = Object.assign(tmp);
  return obj;
});
const redux = react.createContext("overlay");
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f62279 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f62280 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _location;
  let children;
  let style;
  obj = react2;
  const cResult = obj.c(6);
  ({ location: _location, style, children } = arg0);
  if (cResult[0] === children) {
    let tmp2;
    if (cResult[1] === style) {
      tmp2 = cResult[2];
    }
    if (cResult[3] === _location) {
      let tmp4;
      if (cResult[4] === tmp2) {
        tmp4 = cResult[5];
      }
      return tmp4;
    }
    const obj2 = { value: _location, children: tmp2 };
    const tmp7 = metroRequire(redux.Provider, obj2);
    cResult[3] = _location;
    cResult[4] = tmp2;
    cResult[5] = tmp7;
    tmp4 = tmp7;
  }
  const tmp3 = metroRequire(View, { style, children });
  cResult[0] = children;
  cResult[1] = style;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((location) => {
  let obj2;
  const Provider = redux.Provider;
  obj = { value: location.location, children: metroRequire(View, obj2) };
  obj2 = { style: location.style, children: location.children };
  return metroRequire(Provider, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let entry;
  let style;
  obj = react2;
  const cResult = obj.c(6);
  ({ entry, style } = arg0);
  const obj2 = useTimestampTickedNow;
  const now = obj2.useTimestampTickedNow().now;
  if (cResult[0] === entry) {
    let tmp4;
    if (cResult[1] === now) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === style) {
      let tmp6;
      if (cResult[4] === tmp4) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj3 = { style, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive", children: tmp4 };
    const tmp8 = metroRequire(Text_Text.Text, obj3);
    cResult[3] = style;
    cResult[4] = tmp4;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const tmpResult = utils;
  const result = tmpResult.formatActiveTimestamp(entry, now);
  cResult[0] = entry;
  cResult[1] = now;
  cResult[2] = result;
  tmp4 = result;
}) : ((entry) => {
  entry = entry.entry;
  const style = entry.style;
  obj = entry(12829);
  const now = obj.useTimestampTickedNow().now;
  const items = [entry, now];
  const children = react.useMemo(() => {
    obj = utils;
    return obj.formatActiveTimestamp(entry, now);
  }, items);
  return closure_6(entry(4886).Text, { style, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive", children });
});
let closure_14 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  let locale;
  let tmp11;
  let tmp12;
  obj = react2;
  const cResult = obj.c(10);
  entry = entry.entry;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp8 = tmp4[react.useContext(react, redux)];
      const _Symbol = Symbol;
      const tmpResult = utils;
      const isEntryActiveResult = tmpResult.isEntryActive(entry);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function l() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp11 = items;
        tmp12 = fn;
      } else {
        [tmp11, tmp12] = cResult;
      }
      const tmpResult3 = get_initialized;
      const stateFromStores = tmpResult3.useStateFromStores(tmp11, tmp12);
      if (isEntryActiveResult) {
        let tmp21;
        if (cResult[2] !== entry) {
          const obj2 = { entry };
          const tmp24 = metroRequire(closure_14, obj2);
          cResult[2] = entry;
          cResult[3] = tmp24;
          tmp21 = tmp24;
        } else {
          tmp21 = cResult[3];
        }
        return tmp21;
      } else {
        if (cResult[4] === entry) {
          let tmp16;
          if (cResult[5] === stateFromStores) {
            tmp16 = cResult[6];
          }
          if (cResult[7] === tmp8.text) {
            let tmp18;
            if (cResult[8] === tmp16) {
              tmp18 = cResult[9];
            }
            return tmp18;
          }
          const obj3 = { variant: "text-sm/medium", color: tmp15, children: tmp16 };
          const tmp20 = metroRequire(Text_Text.Text, obj3);
          cResult[7] = tmp8.text;
          cResult[8] = tmp16;
          cResult[9] = tmp20;
          tmp18 = tmp20;
        }
        const tmpResult4 = utils;
        const formatEndedTimestampResult = tmpResult4.formatEndedTimestamp(entry, stateFromStores);
        cResult[4] = entry;
        cResult[5] = stateFromStores;
        cResult[6] = formatEndedTimestampResult;
        tmp16 = formatEndedTimestampResult;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((entry) => {
  let locale;
  let tmp6Result;
  entry = entry.entry;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      let tmp12Result;
      const tmp5 = tmp[react.useContext(react, redux)];
      obj = utils;
      const isEntryActiveResult = obj.isEntryActive(entry);
      get_initialized;
      const items = [LocaleStore];
      if (isEntryActiveResult) {
        const obj2 = { entry };
        tmp12Result = metroRequire(closure_14, obj2);
      } else {
        const obj3 = { variant: "text-sm/medium", color: tmp5.text, children: tmp6Result.formatEndedTimestamp(entry, tmp11) };
        const Text = Text_Text.Text;
        tmp6Result = utils;
        tmp12Result = metroRequire(Text, obj3);
      }
      return tmp12Result;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Icon;
  let accessibilityLabel;
  let iconColor;
  let items;
  let text;
  obj = react2;
  const cResult = obj.c(13);
  ({ Icon, iconColor, text, accessibilityLabel } = arg0);
  if (typeof f62279 === "function") {
    const tmp4Result = tmp4(react.useContext(redux));
    if (typeof f62280 === "function") {
      if (typeof tmp5 === "function") {
        const tmp10 = tmp9[react.useContext(react, redux)];
        if (cResult[0] === Icon) {
          if (cResult[1] === iconColor) {
            let tmp13;
            if (cResult[2] === tmp4Result.icon) {
              tmp13 = cResult[3];
            }
            if (cResult[4] === tmp10.text) {
              let tmp16;
              if (cResult[5] === text) {
                tmp16 = cResult[6];
              }
              if (cResult[7] === accessibilityLabel) {
                if (cResult[8] === tmp4Result.badgeContainer) {
                  if (cResult[9] === null != accessibilityLabel) {
                    if (cResult[10] === tmp13) {
                      let tmp19;
                      if (cResult[11] === tmp16) {
                        tmp19 = cResult[12];
                      }
                      return tmp19;
                    }
                  }
                }
              }
              const obj3 = { style: tmp4Result.badgeContainer, accessible: null != accessibilityLabel, accessibilityLabel, children: items };
              items = [tmp13, tmp16];
              const tmp22 = metroImportDefault(View, obj3);
              cResult[7] = accessibilityLabel;
              cResult[8] = tmp4Result.badgeContainer;
              cResult[9] = null != accessibilityLabel;
              cResult[10] = tmp13;
              cResult[11] = tmp16;
              cResult[12] = tmp22;
              tmp19 = tmp22;
            }
            const obj4 = { variant: "text-sm/medium", color: tmp10.text, children: text };
            const tmp18 = metroRequire(Text_Text.Text, obj4);
            cResult[4] = tmp10.text;
            cResult[5] = text;
            cResult[6] = tmp18;
            tmp16 = tmp18;
          }
        }
        const obj5 = { style: tmp4Result.icon, color: iconColor };
        const tmp15 = metroRequire(Icon, obj5);
        cResult[0] = Icon;
        cResult[1] = iconColor;
        cResult[2] = tmp4Result.icon;
        cResult[3] = tmp15;
        tmp13 = tmp15;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((accessibilityLabel) => {
  let items;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (typeof f62279 === "function") {
    const tmp4Result = tmp4(react.useContext(redux));
    if (typeof f62280 === "function") {
      if (typeof tmp5 === "function") {
        const obj2 = { style: tmp4Result.badgeContainer, accessible: null != accessibilityLabel, accessibilityLabel, children: items };
        items = [, ];
        const obj3 = { style: tmp4Result.icon, color: tmp2 };
        const tmp10 = tmp9[react.useContext(react, redux)];
        items[0] = metroRequire(tmp, obj3);
        const obj4 = { variant: "text-sm/medium", color: tmp10.text, children: tmp3 };
        items[1] = metroRequire(Text_Text.Text, obj4);
        return metroImportDefault(View, obj2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  let items;
  obj = react2;
  const cResult = obj.c(9);
  entry = entry.entry;
  if (typeof f62279 === "function") {
    const tmp4Result = tmp4(react.useContext(redux));
    if (typeof f62280 === "function") {
      if (typeof tmp5 === "function") {
        let icon;
        const tmp10 = tmp9[react.useContext(react, redux)];
        const tmpResult = utils;
        if (tmpResult.isEntryActive(entry)) {
          icon = nativeDefault.colors.STATUS_POSITIVE;
        } else {
          icon = tmp10.icon;
        }
        if (cResult[0] === icon) {
          let tmp12;
          let tmp15;
          if (cResult[1] === tmp4Result.icon) {
            tmp12 = cResult[2];
          }
          if (cResult[3] !== entry) {
            const obj3 = { entry };
            const tmp18 = metroRequire(closure_15, obj3);
            cResult[3] = entry;
            cResult[4] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[4];
          }
          if (cResult[5] === tmp4Result.badgeContainer) {
            if (cResult[6] === tmp12) {
              let tmp19;
              if (cResult[7] === tmp15) {
                tmp19 = cResult[8];
              }
              return tmp19;
            }
          }
          const obj4 = { style: tmp4Result.badgeContainer, children: items };
          items = [tmp12, tmp15];
          const tmp22 = metroImportDefault(View, obj4);
          cResult[5] = tmp4Result.badgeContainer;
          cResult[6] = tmp12;
          cResult[7] = tmp15;
          cResult[8] = tmp22;
          tmp19 = tmp22;
        }
        const obj5 = { style: tmp4Result.icon, color: icon };
        const tmp14 = metroRequire(GameControllerIcon.GameControllerIcon, obj5);
        cResult[0] = icon;
        cResult[1] = tmp4Result.icon;
        cResult[2] = tmp14;
        tmp12 = tmp14;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((entry) => {
  let items;
  entry = entry.entry;
  if (typeof f62279 === "function") {
    const tmpResult = tmp(react.useContext(redux));
    if (typeof f62280 === "function") {
      if (typeof tmp2 === "function") {
        let icon;
        const tmp7 = tmp6[react.useContext(react, redux)];
        const obj2 = utils;
        if (obj2.isEntryActive(entry)) {
          icon = nativeDefault.colors.STATUS_POSITIVE;
        } else {
          icon = tmp7.icon;
        }
        const obj3 = { style: tmpResult.badgeContainer, children: items };
        const obj4 = { style: tmpResult.icon, color: icon };
        items = [metroRequire(GameControllerIcon.GameControllerIcon, obj4), ];
        const obj5 = { entry };
        items[1] = metroRequire(closure_15, obj5);
        return metroImportDefault(View, obj3);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  let a11yText;
  let text;
  obj = react2;
  const cResult = obj.c(6);
  entry = entry.entry;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp8 = tmp4[react.useContext(react, redux)];
      const tmpResult = utils;
      if (tmpResult.isEntryMarathon(entry)) {
        let icon;
        let tmp11;
        const tmpResult3 = utils;
        if (tmpResult3.isEntryActive(entry)) {
          icon = nativeDefault.colors.STATUS_POSITIVE;
        } else {
          icon = tmp8.icon;
        }
        if (cResult[0] !== entry) {
          const tmpResult4 = utils;
          const marathonDescription = tmpResult4.getMarathonDescription(entry);
          cResult[0] = entry;
          cResult[1] = marathonDescription;
          tmp11 = marathonDescription;
        } else {
          tmp11 = cResult[1];
        }
        ({ text, a11yText } = tmp11);
        let tmp13 = null;
        if (null != text) {
          if (cResult[2] === a11yText) {
            if (cResult[3] === icon) {
              let tmp14;
              if (cResult[4] === text) {
                tmp14 = cResult[5];
              }
              tmp13 = tmp14;
            }
          }
          const obj2 = { Icon: TimerIcon2.TimerIcon, iconColor: icon, text, accessibilityLabel: a11yText };
          const tmp17 = metroRequire(closure_16, obj2);
          cResult[2] = a11yText;
          cResult[3] = icon;
          cResult[4] = text;
          cResult[5] = tmp17;
          tmp14 = tmp17;
        }
        return tmp13;
      } else {
        return null;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((entry) => {
  entry = entry.entry;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp5 = tmp[react.useContext(react, redux)];
      obj = utils;
      if (obj.isEntryMarathon(entry)) {
        let icon;
        const tmp6Result = utils;
        if (tmp6Result.isEntryActive(entry)) {
          icon = nativeDefault.colors.STATUS_POSITIVE;
        } else {
          icon = tmp5.icon;
        }
        const tmp6Result2 = utils;
        const marathonDescription = tmp6Result2.getMarathonDescription(entry);
        const text = marathonDescription.text;
        let tmp12 = null;
        if (null != text) {
          const obj2 = { Icon: TimerIcon2.TimerIcon, iconColor: icon, text, accessibilityLabel: tmp11 };
          tmp12 = metroRequire(closure_16, obj2);
        }
        return tmp12;
      } else {
        return null;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  let intl;
  obj = react2;
  const cResult = obj.c(1);
  entry = entry.entry;
  let tmp4 = null;
  const obj2 = utils;
  if (obj2.isEntryNew(entry)) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { Icon: NewUserIcon.NewUserIcon, text: intl.string(intl3.t.keY6mW), iconColor: nativeDefault.colors.STATUS_POSITIVE };
      intl = intl3.intl;
      const tmp10 = metroRequire(closure_16, obj3);
      cResult[0] = tmp10;
      first = tmp10;
    } else {
      first = cResult[0];
    }
    tmp4 = first;
  }
  return tmp4;
}) : ((entry) => {
  let intl;
  entry = entry.entry;
  let tmp3 = null;
  obj = utils;
  if (obj.isEntryNew(entry)) {
    const obj2 = { Icon: NewUserIcon.NewUserIcon, text: intl.string(intl3.t.keY6mW), iconColor: nativeDefault.colors.STATUS_POSITIVE };
    intl = intl3.intl;
    tmp3 = metroRequire(closure_16, obj2);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  obj = react2;
  const cResult = obj.c(14);
  entry = entry.entry;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp8 = tmp4[react.useContext(react, redux)];
      if (cResult[0] === tmp8) {
        let tmp9;
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp14;
        if (cResult[1] === entry) {
          tmp9 = cResult[2];
          tmp10 = cResult[3];
          tmp11 = cResult[4];
          tmp12 = cResult[5];
          tmp13 = cResult[6];
          tmp14 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (tmp14 === Symbol.for("react.early_return_sentinel")) {
          if (cResult[8] === tmp9) {
            if (cResult[9] === tmp10) {
              if (cResult[10] === tmp11) {
                if (cResult[11] === tmp12) {
                  let tmp26;
                  if (cResult[12] === tmp13) {
                    tmp26 = cResult[13];
                  }
                  tmp14 = tmp26;
                }
              }
            }
          }
          const obj2 = { Icon: tmp10, text: tmp11, iconColor: tmp12, accessibilityLabel: tmp13 };
          const tmp28 = metroRequire(tmp9, obj2);
          cResult[8] = tmp9;
          cResult[9] = tmp10;
          cResult[10] = tmp11;
          cResult[11] = tmp12;
          cResult[12] = tmp13;
          cResult[13] = tmp28;
          tmp26 = tmp28;
        }
        return tmp14;
      }
      const _Symbol = Symbol;
      const forResult = Symbol.for("react.early_return_sentinel");
      const tmpResult = utils;
      const streakCount = tmpResult.getStreakCount(entry);
      let tmp19 = null;
      let formatToPlainStringResult1;
      let icon;
      let formatToPlainStringResult;
      let FlashIcon;
      let tmp24;
      if (null != streakCount) {
        tmp19 = null;
        if (streakCount >= 2) {
          tmp24 = closure_16;
          FlashIcon = FlashIcon2.FlashIcon;
          const intl = intl3.intl;
          const obj3 = { days: streakCount };
          formatToPlainStringResult = intl.formatToPlainString(intl3.t["Klie/P"], obj3);
          icon = tmp8.icon;
          const intl2 = intl3.intl;
          const obj4 = { days: streakCount };
          formatToPlainStringResult1 = intl2.formatToPlainString(intl3.t.nVLPBf, obj4);
          tmp19 = forResult;
        }
      }
      cResult[0] = tmp8;
      cResult[1] = entry;
      cResult[2] = tmp24;
      cResult[3] = FlashIcon;
      cResult[4] = formatToPlainStringResult;
      cResult[5] = icon;
      cResult[6] = formatToPlainStringResult1;
      cResult[7] = tmp19;
      tmp14 = tmp19;
      tmp13 = formatToPlainStringResult1;
      tmp12 = icon;
      tmp11 = formatToPlainStringResult;
      tmp10 = FlashIcon;
      tmp9 = tmp24;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((arg0) => {
  let intl;
  let intl2;
  let obj3;
  let obj4;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp6 = tmp2[react.useContext(react, redux)];
      obj = utils;
      const streakCount = obj.getStreakCount(tmp);
      let tmp11 = null;
      if (null != streakCount) {
        tmp11 = null;
        if (streakCount >= 2) {
          const obj2 = { Icon: FlashIcon2.FlashIcon, text: intl.formatToPlainString(intl3.t["Klie/P"], obj3), iconColor: tmp6.icon, accessibilityLabel: intl2.formatToPlainString(intl3.t.nVLPBf, obj4) };
          intl = intl3.intl;
          obj3 = { days: streakCount };
          intl2 = intl3.intl;
          obj4 = { days: streakCount };
          tmp11 = metroRequire(closure_16, obj2);
        }
      }
      return tmp11;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  obj = react2;
  const cResult = obj.c(3);
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp9 = tmp5[react.useContext(react, redux)];
      const tmpResult = utils;
      const trendingType = tmpResult.getTrendingType(tmp4);
      let tmp12 = null;
      if (null != trendingType) {
        tmp12 = null;
        if (trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED) {
          let first;
          let tmp15;
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl3.intl;
            const stringResult = intl.string(intl3.t.TsWCdW);
            cResult[0] = stringResult;
            first = stringResult;
          } else {
            first = cResult[0];
          }
          if (cResult[1] !== tmp9.icon) {
            const obj2 = { Icon: FireIcon.FireIcon, text: first, iconColor: tmp9.icon };
            const tmp18 = metroRequire(closure_16, obj2);
            cResult[1] = tmp9.icon;
            cResult[2] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[2];
          }
          tmp12 = tmp15;
        }
      }
      return tmp12;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((arg0) => {
  let intl;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp6 = tmp2[react.useContext(react, redux)];
      obj = utils;
      const trendingType = obj.getTrendingType(tmp);
      let tmp11 = null;
      if (null != trendingType) {
        tmp11 = null;
        if (trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED) {
          const obj2 = { Icon: FireIcon.FireIcon, text: intl.string(intl3.t.TsWCdW), iconColor: tmp6.icon };
          intl = intl3.intl;
          tmp11 = metroRequire(closure_16, obj2);
        }
      }
      return tmp11;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  obj = react2;
  const cResult = obj.c(3);
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp9 = tmp5[react.useContext(react, redux)];
      let tmp10 = null;
      const tmpResult = utils;
      if (null != tmpResult.getResurrectedEntryLastPlayTime(tmp4)) {
        let first;
        let tmp14;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t.adnLsB);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp9.icon) {
          const obj2 = { Icon: RetryIcon.RetryIcon, text: first, iconColor: tmp9.icon };
          const tmp17 = metroRequire(closure_16, obj2);
          cResult[1] = tmp9.icon;
          cResult[2] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[2];
        }
        tmp10 = tmp14;
      }
      return tmp10;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((arg0) => {
  let intl;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      let tmp9 = null;
      const tmp6 = tmp2[react.useContext(react, redux)];
      obj = utils;
      if (null != obj.getResurrectedEntryLastPlayTime(tmp)) {
        const obj2 = { Icon: RetryIcon.RetryIcon, text: intl.string(intl3.t.adnLsB), iconColor: tmp6.icon };
        intl = intl3.intl;
        tmp9 = metroRequire(closure_16, obj2);
      }
      return tmp9;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  obj = react2;
  const cResult = obj.c(8);
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp9 = tmp5[react.useContext(react, redux)];
      const tmpResult = utils;
      const entryDuration = tmpResult.getEntryDuration(tmp4);
      if (null == entryDuration) {
        return null;
      } else {
        let first;
        let tmp14;
        let tmp17;
        const _Symbol = Symbol;
        const SDRHgr = intl3.t.SDRHgr;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t["/50eHi"]);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== entryDuration) {
          const intl2 = intl3.intl;
          const _Math = Math;
          const format = intl2.format;
          const obj2 = { hours: Math.round(entryDuration / DurationsDefault.Seconds.HOUR) };
          const formatResult = format(SDRHgr, obj2);
          cResult[1] = entryDuration;
          cResult[2] = formatResult;
          tmp14 = formatResult;
        } else {
          tmp14 = cResult[2];
        }
        if (cResult[3] !== tmp14) {
          const obj3 = { children: items };
          items = [first, ": ", tmp14];
          const tmp20 = metroImportDefault(metroImportAll, obj3);
          cResult[3] = tmp14;
          cResult[4] = tmp20;
          tmp17 = tmp20;
        } else {
          tmp17 = cResult[4];
        }
        if (cResult[5] === tmp9.icon) {
          let tmp21;
          if (cResult[6] === tmp17) {
            tmp21 = cResult[7];
          }
          return tmp21;
        }
        const obj4 = { Icon: TrophyIcon.TrophyIcon, text: tmp17, iconColor: tmp9.icon };
        const tmp24 = metroRequire(closure_16, obj4);
        cResult[5] = tmp9.icon;
        cResult[6] = tmp17;
        cResult[7] = tmp24;
        tmp21 = tmp24;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((arg0) => {
  let items;
  let obj3;
  if (typeof f62280 === "function") {
    if (typeof f62279 === "function") {
      const tmp6 = tmp2[react.useContext(react, redux)];
      obj = utils;
      const entryDuration = obj.getEntryDuration(tmp);
      if (null == entryDuration) {
        return null;
      } else {
        const obj2 = { Icon: TrophyIcon.TrophyIcon, text: metroImportDefault(metroImportAll, obj3), iconColor: tmp6.icon };
        const SDRHgr = intl3.t.SDRHgr;
        obj3 = { children: items };
        const intl = intl3.intl;
        items = [intl.string(intl3.t["/50eHi"]), ": ", ];
        const intl2 = intl3.intl;
        const _Math = Math;
        const format = intl2.format;
        const obj4 = { hours: Math.round(entryDuration / DurationsDefault.Seconds.HOUR) };
        items[2] = format(SDRHgr, obj4);
        return metroRequire(closure_16, obj2);
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  let items;
  obj = react2;
  const cResult = obj.c(8);
  entry = entry.entry;
  if (typeof f62279 === "function") {
    let tmp8;
    let tmp12;
    const tmp4Result = tmp4(react.useContext(redux));
    if (cResult[0] !== tmp4Result.icon) {
      const obj2 = { style: tmp4Result.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
      const TimerIcon = TimerIcon2.TimerIcon;
      const tmp11 = metroRequire(TimerIcon, obj2);
      cResult[0] = tmp4Result.icon;
      cResult[1] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] !== entry) {
      const obj3 = { entry };
      const tmp15 = metroRequire(closure_15, obj3);
      cResult[2] = entry;
      cResult[3] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] === tmp4Result.badgeContainer) {
      if (cResult[5] === tmp8) {
        let tmp16;
        if (cResult[6] === tmp12) {
          tmp16 = cResult[7];
        }
        return tmp16;
      }
    }
    const obj4 = { style: tmp4Result.badgeContainer, children: items };
    items = [tmp8, tmp12];
    const tmp19 = metroImportDefault(View, obj4);
    cResult[4] = tmp4Result.badgeContainer;
    cResult[5] = tmp8;
    cResult[6] = tmp12;
    cResult[7] = tmp19;
    tmp16 = tmp19;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((arg0) => {
  let items;
  if (typeof f62279 === "function") {
    const tmp2Result = tmp2(react.useContext(redux));
    obj = { style: tmp2Result.badgeContainer, children: items };
    const obj2 = { style: tmp2Result.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    const TimerIcon = TimerIcon2.TimerIcon;
    items = [metroRequire(TimerIcon, obj2), ];
    const obj3 = { entry: tmp };
    items[1] = metroRequire(closure_15, obj3);
    return metroImportDefault(View, obj);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const result2 = size.fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export const BadgesContainer = tmp5;
export const ActiveTimestamp = tmp6;
export const GameTimestampBadge = tmp7;
export const MarathonBadge = tmp8;
export const NewGameBadge = tmp9;
export const StreakBadge = tmp10;
export const TrendingBadge = tmp11;
export const ResurrectedBadge = tmp12;
export const TopGameBadge = tmp13;
export const CustomStatusTimestampBadge = tmp14;