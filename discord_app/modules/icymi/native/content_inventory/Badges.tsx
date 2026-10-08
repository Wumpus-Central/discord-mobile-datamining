// discord_app/modules/icymi/native/content_inventory/Badges.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import utils from "../../../content_inventory/utils.tsx";
import TrophyIcon from "../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import FireIcon2 from "../../../../design/components/Icon/native/redesign/generated/FireIcon.tsx";
import GameControllerIcon from "../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import TimerIcon2 from "../../../../design/components/Icon/native/redesign/generated/TimerIcon.tsx";
import RetryIcon2 from "../../../../design/components/Icon/native/redesign/generated/RetryIcon.tsx";
import useTimestampTickedNow from "../../../content_inventory/memberlist/useTimestampTickedNow.tsx";
import NewUserIcon from "../../../../design/components/Icon/native/redesign/generated/NewUserIcon.tsx";
import FlashIcon2 from "../../../../design/components/Icon/native/redesign/generated/FlashIcon.tsx";
import TrendingType from "../../../../../discord_common/js/shared/shared-constants/TrendingType.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let obj = {
  overlay: {
    text: "content-inventory-overlay-text-secondary",
    icon: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
  },
  "user-profile": null,
};
let obj2 = {
  text: "content-inventory-overlay-text-secondary",
  icon: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
};
obj["user-profile"] = { text: "text-subtle", icon: nativeDefault.colors.TEXT_SUBTLE };
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles((arg0) => {
  obj = { icon: { width: 16, height: 16 }, badgeContainer: null };
  let tmp = null;
  if ("overlay" === arg0) {
    const obj2 = {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      paddingVertical: nativeDefault.space.PX_4,
      paddingLeft: nativeDefault.space.PX_8,
      paddingRight: 10,
      borderRadius: nativeDefault.radii.sm,
    };
    tmp = obj2;
  }
  const merged = Object.assign(tmp);
  obj.badgeContainer = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
  return obj;
});
const redux = noop.createContext("overlay");
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useBadgeLocation() {}
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useBadgeColors() {}
fn(558);
let obj3 = { text: "text-subtle", icon: nativeDefault.colors.TEXT_SUBTLE };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActiveTimestamp(arg0) {
      const cResult = c.c(6);
      ({ entry, style } = arg0);
      const now = useTimestampTickedNow.useTimestampTickedNow().now;
      if (cResult[0] === entry) {
        if (cResult[1] === now) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === style) {
          if (cResult[4] === tmp4) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj3 = {
          style,
          variant: "text-sm/medium",
          tabularNumbers: true,
          color: "text-feedback-positive",
          children: tmp4,
        };
        const tmp8 = timestampProducer(Text_Text.Text, obj3);
        cResult[3] = style;
        cResult[4] = tmp4;
        cResult[5] = tmp8;
        tmp6 = tmp8;
      }
      const result = utils.formatActiveTimestamp(entry, now);
      cResult[0] = entry;
      cResult[1] = now;
      cResult[2] = result;
      tmp4 = result;
      const tmpResult = utils;
    }
  : function ActiveTimestamp(style) {
      const entry = style.entry;
      const now = entry(12997).useTimestampTickedNow().now;
      const items = [entry, now];
      const children = noop.useMemo(() => utils.formatActiveTimestamp(entry, now), items);
      return closure_6(entry(5086).Text, {
        style: style.style,
        variant: "text-sm/medium",
        tabularNumbers: true,
        color: "text-feedback-positive",
        children,
      });
    };
let closure_14 = tmp6;
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentTimestamp(entry) {
      const cResult = c.c(10);
      entry = entry.entry;
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          const tmp8 = tmp4[noop.useContext(noop, closure_11)];
          const _Symbol = Symbol;
          const tmpResult = utils;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [LocaleStore];
            const fn = function c() {
              return locale.locale;
            };
            cResult[0] = items;
            cResult[1] = fn;
            tmp11 = items;
            tmp12 = fn;
          } else {
            [tmp11, tmp12] = cResult;
          }
          const isEntryActiveResult = utils.isEntryActive(entry);
          const stateFromStores = initialize.useStateFromStores(tmp11, tmp12);
          if (isEntryActiveResult) {
            if (cResult[2] !== entry) {
              const obj2 = { entry };
              const tmp24 = timestampProducer(closure_14, obj2);
              cResult[2] = entry;
              cResult[3] = tmp24;
              let tmp21 = tmp24;
            } else {
              tmp21 = cResult[3];
            }
            return tmp21;
          } else {
            if (cResult[4] === entry) {
              if (cResult[5] === stateFromStores) {
                let tmp16 = cResult[6];
              }
              if (cResult[7] === tmp8.text) {
                if (cResult[8] === tmp16) {
                  let tmp18 = cResult[9];
                }
                return tmp18;
              }
              const obj3 = { variant: "text-sm/medium", color: tmp15, children: tmp16 };
              const tmp20 = timestampProducer(Text_Text.Text, obj3);
              cResult[7] = tmp8.text;
              cResult[8] = tmp16;
              cResult[9] = tmp20;
              tmp18 = tmp20;
            }
            const formatEndedTimestampResult = utils.formatEndedTimestamp(entry, stateFromStores);
            cResult[4] = entry;
            cResult[5] = stateFromStores;
            cResult[6] = formatEndedTimestampResult;
            tmp16 = formatEndedTimestampResult;
            const tmpResult4 = utils;
          }
          const tmpResult3 = initialize;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function ContentTimestamp(entry) {
      entry = entry.entry;
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          initialize;
          const items = [LocaleStore];
          if (isEntryActiveResult) {
            const obj2 = { entry };
            let tmp11Result = timestampProducer(closure_14, obj2);
          } else {
            const obj3 = {
              variant: "text-sm/medium",
              color: tmp[noop.useContext(noop, closure_11)].text,
              children: utils.formatEndedTimestamp(entry, tmp10),
            };
            tmp11Result = timestampProducer(Text_Text.Text, obj3);
            const tmp5Result = utils;
          }
          return tmp11Result;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseBadge(arg0) {
      const cResult = c.c(13);
      ({ Icon, iconColor, text, accessibilityLabel } = arg0);
      if (typeof useBadgeLocation === "function") {
        const tmp4Result = tmp4(noop.useContext(closure_11));
        if (typeof useBadgeColors === "function") {
          if (typeof tmp5 === "function") {
            const tmp10 = tmp9[noop.useContext(noop, closure_11)];
            if (cResult[0] === Icon) {
              if (cResult[1] === iconColor) {
                if (cResult[2] === tmp4Result.icon) {
                  let tmp13 = cResult[3];
                }
                if (cResult[4] === tmp10.text) {
                  if (cResult[5] === text) {
                    let tmp16 = cResult[6];
                  }
                  if (cResult[7] === accessibilityLabel) {
                    if (cResult[8] === tmp4Result.badgeContainer) {
                      if (cResult[9] === tmp12) {
                        if (cResult[10] === tmp13) {
                          if (cResult[11] === tmp16) {
                            let tmp19 = cResult[12];
                          }
                          return tmp19;
                        }
                      }
                    }
                  }
                  const obj3 = {
                    style: tmp4Result.badgeContainer,
                    accessible: tmp12,
                    accessibilityLabel,
                    children: null,
                  };
                  const items = [tmp13, tmp16];
                  obj3.children = items;
                  const tmp22 = React5(View, obj3);
                  cResult[7] = accessibilityLabel;
                  cResult[8] = tmp4Result.badgeContainer;
                  cResult[9] = tmp12;
                  cResult[10] = tmp13;
                  cResult[11] = tmp16;
                  cResult[12] = tmp22;
                  tmp19 = tmp22;
                }
                const obj4 = { variant: "text-sm/medium", color: tmp10.text, children: text };
                const tmp18 = timestampProducer(Text_Text.Text, obj4);
                cResult[4] = tmp10.text;
                cResult[5] = text;
                cResult[6] = tmp18;
                tmp16 = tmp18;
              }
            }
            const obj5 = { style: tmp4Result.icon, color: iconColor };
            const tmp15 = timestampProducer(Icon, obj5);
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
    }
  : function BaseBadge(accessibilityLabel) {
      accessibilityLabel = accessibilityLabel.accessibilityLabel;
      if (typeof useBadgeLocation === "function") {
        const tmp4Result = tmp4(noop.useContext(closure_11));
        if (typeof useBadgeColors === "function") {
          if (typeof tmp5 === "function") {
            const obj2 = {
              style: tmp4Result.badgeContainer,
              accessible: null != accessibilityLabel,
              accessibilityLabel,
              children: null,
            };
            const obj3 = { style: tmp4Result.icon, color: tmp2 };
            const items = [timestampProducer(tmp, obj3)];
            const obj4 = {
              variant: "text-sm/medium",
              color: tmp9[noop.useContext(noop, closure_11)].text,
              children: tmp3,
            };
            items[1] = timestampProducer(Text_Text.Text, obj4);
            obj2.children = items;
            return React5(View, obj2);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgesContainer(arg0) {
      const cResult = c.c(6);
      ({ location: _location, style, children } = arg0);
      if (cResult[0] === children) {
        if (cResult[1] === style) {
          let tmp2 = cResult[2];
        }
        if (cResult[3] === _location) {
          if (cResult[4] === tmp2) {
            let tmp4 = cResult[5];
          }
          return tmp4;
        }
        const obj2 = { value: _location, children: tmp2 };
        const tmp7 = timestampProducer(redux.Provider, obj2);
        cResult[3] = _location;
        cResult[4] = tmp2;
        cResult[5] = tmp7;
        tmp4 = tmp7;
      }
      const tmp3 = timestampProducer(View, { style, children });
      cResult[0] = children;
      cResult[1] = style;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : function BadgesContainer(location) {
      obj = {
        value: location.location,
        children: timestampProducer(View, { style: location.style, children: location.children }),
      };
      return timestampProducer(redux.Provider, obj);
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameTimestampBadge(entry) {
      const cResult = c.c(9);
      entry = entry.entry;
      if (typeof useBadgeLocation === "function") {
        const tmp4Result = tmp4(noop.useContext(closure_11));
        if (typeof useBadgeColors === "function") {
          if (typeof tmp5 === "function") {
            if (tmpResult.isEntryActive(entry)) {
              let icon = nativeDefault.colors.STATUS_POSITIVE;
            } else {
              icon = tmp9[noop.useContext(noop, closure_11)].icon;
            }
            if (cResult[0] === icon) {
              if (cResult[1] === tmp4Result.icon) {
                let tmp11 = cResult[2];
              }
              if (cResult[3] !== entry) {
                const obj3 = { entry };
                const tmp17 = timestampProducer(closure_15, obj3);
                cResult[3] = entry;
                cResult[4] = tmp17;
                let tmp14 = tmp17;
              } else {
                tmp14 = cResult[4];
              }
              if (cResult[5] === tmp4Result.badgeContainer) {
                if (cResult[6] === tmp11) {
                  if (cResult[7] === tmp14) {
                    let tmp18 = cResult[8];
                  }
                  return tmp18;
                }
              }
              const obj4 = { style: tmp4Result.badgeContainer, children: null };
              const items = [tmp11, tmp14];
              obj4.children = items;
              const tmp21 = React5(View, obj4);
              cResult[5] = tmp4Result.badgeContainer;
              cResult[6] = tmp11;
              cResult[7] = tmp14;
              cResult[8] = tmp21;
              tmp18 = tmp21;
            }
            const obj5 = { style: tmp4Result.icon, color: icon };
            const tmp13 = timestampProducer(GameControllerIcon.GameControllerIcon, obj5);
            cResult[0] = icon;
            cResult[1] = tmp4Result.icon;
            cResult[2] = tmp13;
            tmp11 = tmp13;
            tmpResult = utils;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function GameTimestampBadge(entry) {
      entry = entry.entry;
      if (typeof useBadgeLocation === "function") {
        const tmpResult = tmp(noop.useContext(closure_11));
        if (typeof useBadgeColors === "function") {
          if (typeof tmp2 === "function") {
            if (obj2.isEntryActive(entry)) {
              let icon = nativeDefault.colors.STATUS_POSITIVE;
            } else {
              icon = tmp6[noop.useContext(noop, closure_11)].icon;
            }
            const obj3 = { style: tmpResult.badgeContainer, children: null };
            const obj4 = { style: tmpResult.icon, color: icon };
            const items = [timestampProducer(GameControllerIcon.GameControllerIcon, obj4)];
            const obj5 = { entry };
            items[1] = timestampProducer(closure_15, obj5);
            obj3.children = items;
            return React5(View, obj3);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MarathonBadge(entry) {
      let TimerIcon = dependencyMap;
      const cResult = c.c(6);
      entry = entry.entry;
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          if (tmpResult.isEntryMarathon(entry)) {
            if (tmpResult3.isEntryActive(entry)) {
              let icon = nativeDefault.colors.STATUS_POSITIVE;
            } else {
              icon = tmp3[noop.useContext(noop, closure_11)].icon;
            }
            if (cResult[0] !== entry) {
              const marathonDescription = utils.getMarathonDescription(entry);
              cResult[0] = entry;
              cResult[1] = marathonDescription;
              let tmp9 = marathonDescription;
              const tmpResult4 = utils;
            } else {
              tmp9 = cResult[1];
            }
            ({ text, a11yText } = tmp9);
            if (null == text) {
              return null;
            } else {
              if (cResult[2] === a11yText) {
                if (cResult[3] === icon) {
                }
              }
              const obj2 = { Icon: null, iconColor: null, text: null, accessibilityLabel: null };
              TimerIcon = TimerIcon2.TimerIcon;
              obj2.Icon = TimerIcon;
              obj2.iconColor = icon;
              obj2.text = text;
              obj2.accessibilityLabel = a11yText;
              const tmp15 = timestampProducer(closure_16, obj2);
              cResult[2] = a11yText;
              cResult[3] = icon;
              cResult[4] = text;
              cResult[5] = tmp15;
            }
            tmpResult3 = utils;
          } else {
            return null;
          }
          tmpResult = utils;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function MarathonBadge(entry) {
      entry = entry.entry;
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          if (obj.isEntryMarathon(entry)) {
            if (tmp5Result.isEntryActive(entry)) {
              let icon = nativeDefault.colors.STATUS_POSITIVE;
            } else {
              icon = tmp[noop.useContext(noop, closure_11)].icon;
            }
            tmp5Result = utils;
            const marathonDescription = utils.getMarathonDescription(entry);
            const text = marathonDescription.text;
            let tmp11 = null;
            if (null != text) {
              const obj2 = { Icon: TimerIcon2.TimerIcon, iconColor: icon, text, accessibilityLabel: tmp10 };
              tmp11 = timestampProducer(closure_16, obj2);
            }
            return tmp11;
          } else {
            return null;
          }
          obj = utils;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NewGameBadge(entry) {
      let STATUS_POSITIVE = dependencyMap;
      const cResult = c.c(1);
      if (!obj2.isEntryNew(entry.entry)) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { Icon: NewUserIcon.NewUserIcon, text: null, iconColor: null };
          const intl = util.intl;
          obj3.text = intl.string(util.t.keY6mW);
          STATUS_POSITIVE = nativeDefault.colors.STATUS_POSITIVE;
          obj3.iconColor = STATUS_POSITIVE;
          const tmp8 = timestampProducer(closure_16, obj3);
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
      }
      obj2 = utils;
    }
  : function NewGameBadge(entry) {
      let tmp3 = null;
      if (obj.isEntryNew(entry.entry)) {
        const obj2 = { Icon: NewUserIcon.NewUserIcon, text: null, iconColor: null };
        const intl = util.intl;
        obj2.text = intl.string(util.t.keY6mW);
        obj2.iconColor = nativeDefault.colors.STATUS_POSITIVE;
        tmp3 = timestampProducer(closure_16, obj2);
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StreakBadge(entry) {
      const cResult = c.c(14);
      entry = entry.entry;
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          const tmp8 = tmp4[noop.useContext(noop, closure_11)];
          if (cResult[0] === tmp8) {
            if (cResult[1] === entry) {
              let tmp9 = cResult[2];
              let tmp10 = cResult[3];
              let tmp11 = cResult[4];
              let tmp12 = cResult[5];
              let tmp13 = cResult[6];
              let tmp14 = cResult[7];
            }
            const _Symbol2 = Symbol;
            if (tmp14 !== Symbol.for("react.early_return_sentinel")) {
              return tmp14;
            } else {
              if (cResult[8] === tmp9) {
                if (cResult[9] === tmp10) {
                  if (cResult[10] === tmp11) {
                    if (cResult[11] === tmp12) {
                    }
                  }
                }
              }
              const obj2 = { Icon: tmp10, text: tmp11, iconColor: tmp12, accessibilityLabel: tmp13 };
              const tmp28 = timestampProducer(tmp9, obj2);
              cResult[8] = tmp9;
              cResult[9] = tmp10;
              cResult[10] = tmp11;
              cResult[11] = tmp12;
              cResult[12] = tmp13;
              cResult[13] = tmp28;
            }
          }
          const _Symbol = Symbol;
          const forResult = Symbol.for("react.early_return_sentinel");
          const streakCount = utils.getStreakCount(entry);
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
              const intl = util.intl;
              const obj3 = { days: streakCount };
              formatToPlainStringResult = intl.formatToPlainString(util.t["Klie/P"], obj3);
              icon = tmp8.icon;
              const intl2 = util.intl;
              const obj4 = { days: streakCount };
              formatToPlainStringResult1 = intl2.formatToPlainString(util.t.nVLPBf, obj4);
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
          const tmpResult = utils;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function StreakBadge(arg0) {
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          const streakCount = utils.getStreakCount(tmp);
          let tmp10 = null;
          if (null != streakCount) {
            tmp10 = null;
            if (streakCount >= 2) {
              const obj2 = { Icon: FlashIcon2.FlashIcon, text: null, iconColor: null, accessibilityLabel: null };
              const intl = util.intl;
              const obj3 = { days: streakCount };
              obj2.text = intl.formatToPlainString(util.t["Klie/P"], obj3);
              obj2.iconColor = tmp2[noop.useContext(noop, closure_11)].icon;
              const intl2 = util.intl;
              const obj4 = { days: streakCount };
              obj2.accessibilityLabel = intl2.formatToPlainString(util.t.nVLPBf, obj4);
              tmp10 = timestampProducer(closure_16, obj2);
            }
          }
          return tmp10;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TrendingBadge(arg0) {
      let FireIcon = dependencyMap;
      const cResult = c.c(3);
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          let icon = tmp4[noop.useContext(noop, closure_11)];
          const trendingType = utils.getTrendingType(tmp3);
          let tmp10 = null;
          if (null != trendingType) {
            tmp10 = null;
            if (trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED) {
              const _Symbol = Symbol;
              if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t.TsWCdW);
                cResult[0] = stringResult;
                let icon2 = stringResult;
              } else {
                icon2 = cResult[0];
              }
              if (cResult[1] !== icon.icon) {
                const obj2 = { Icon: null, text: null, iconColor: null };
                FireIcon = FireIcon2.FireIcon;
                obj2.Icon = FireIcon;
                obj2.text = icon2;
                icon2 = icon.icon;
                obj2.iconColor = icon2;
                const tmp15 = timestampProducer(closure_16, obj2);
                icon = icon.icon;
                cResult[1] = icon;
                cResult[2] = tmp15;
              }
            }
          }
          return tmp10;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function TrendingBadge(arg0) {
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          const trendingType = utils.getTrendingType(tmp);
          let tmp10 = null;
          if (null != trendingType) {
            tmp10 = null;
            if (trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED) {
              const obj2 = { Icon: FireIcon2.FireIcon, text: null, iconColor: null };
              const intl = util.intl;
              obj2.text = intl.string(util.t.TsWCdW);
              obj2.iconColor = tmp2[noop.useContext(noop, closure_11)].icon;
              tmp10 = timestampProducer(closure_16, obj2);
            }
          }
          return tmp10;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ResurrectedBadge(arg0) {
      let RetryIcon = dependencyMap;
      const cResult = c.c(3);
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          let icon = tmp4[noop.useContext(noop, closure_11)];
          if (null == tmpResult.getResurrectedEntryLastPlayTime(tmp3)) {
            return null;
          } else {
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = util.intl;
              const stringResult = intl.string(util.t.adnLsB);
              cResult[0] = stringResult;
              let icon2 = stringResult;
            } else {
              icon2 = cResult[0];
            }
            if (cResult[1] !== icon.icon) {
              const obj2 = { Icon: null, text: null, iconColor: null };
              RetryIcon = RetryIcon2.RetryIcon;
              obj2.Icon = RetryIcon;
              obj2.text = icon2;
              icon2 = icon.icon;
              obj2.iconColor = icon2;
              const tmp14 = timestampProducer(closure_16, obj2);
              icon = icon.icon;
              cResult[1] = icon;
              cResult[2] = tmp14;
            }
          }
          tmpResult = utils;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function ResurrectedBadge(arg0) {
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          let tmp8 = null;
          if (null != obj.getResurrectedEntryLastPlayTime(tmp)) {
            const obj2 = { Icon: RetryIcon2.RetryIcon, text: null, iconColor: null };
            const intl = util.intl;
            obj2.text = intl.string(util.t.adnLsB);
            obj2.iconColor = tmp2[noop.useContext(noop, closure_11)].icon;
            tmp8 = timestampProducer(closure_16, obj2);
          }
          return tmp8;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = fn(558);
let tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TopGameBadge(arg0) {
      const cResult = c.c(8);
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          const tmp9 = tmp5[noop.useContext(noop, closure_11)];
          const entryDuration = utils.getEntryDuration(tmp4);
          if (null == entryDuration) {
            return null;
          } else {
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = util.intl;
              const stringResult = intl.string(util.t["/50eHi"]);
              cResult[0] = stringResult;
              let first = stringResult;
            } else {
              first = cResult[0];
            }
            if (cResult[1] !== entryDuration) {
              const intl2 = util.intl;
              const obj2 = { hours: null };
              const _Math = Math;
              obj2.hours = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
              const formatResult = intl2.format(util.t.SDRHgr, obj2);
              cResult[1] = entryDuration;
              cResult[2] = formatResult;
              let tmp14 = formatResult;
            } else {
              tmp14 = cResult[2];
            }
            if (cResult[3] !== tmp14) {
              const obj3 = { children: null };
              const items = [first, ": ", tmp14];
              obj3.children = items;
              const tmp20 = React5(closure_1_8, obj3);
              cResult[3] = tmp14;
              cResult[4] = tmp20;
              let tmp17 = tmp20;
            } else {
              tmp17 = cResult[4];
            }
            if (cResult[5] === tmp9.icon) {
              if (cResult[6] === tmp17) {
                let tmp21 = cResult[7];
              }
              return tmp21;
            }
            const obj4 = { Icon: TrophyIcon.TrophyIcon, text: tmp17, iconColor: tmp9.icon };
            const tmp24 = timestampProducer(closure_16, obj4);
            cResult[5] = tmp9.icon;
            cResult[6] = tmp17;
            cResult[7] = tmp24;
            tmp21 = tmp24;
          }
          const tmpResult = utils;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function TopGameBadge(arg0) {
      if (typeof useBadgeColors === "function") {
        if (typeof useBadgeLocation === "function") {
          const entryDuration = utils.getEntryDuration(tmp);
          if (null == entryDuration) {
            return null;
          } else {
            const obj2 = { Icon: TrophyIcon.TrophyIcon, text: null, iconColor: null };
            const obj3 = { children: null };
            const intl = util.intl;
            const items = [intl.string(util.t["/50eHi"]), ": "];
            const intl2 = util.intl;
            const obj4 = { hours: null };
            const _Math = Math;
            obj4.hours = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
            items[2] = intl2.format(util.t.SDRHgr, obj4);
            obj3.children = items;
            obj2.text = React5(closure_1_8, obj3);
            obj2.iconColor = tmp2[noop.useContext(noop, closure_11)].icon;
            return timestampProducer(closure_16, obj2);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
const size = fn(2);
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
export const CustomStatusTimestampBadge = ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomStatusTimestampBadge(entry) {
      const cResult = c.c(8);
      entry = entry.entry;
      if (typeof useBadgeLocation === "function") {
        const tmp4Result = tmp4(noop.useContext(closure_11));
        if (cResult[0] !== tmp4Result.icon) {
          const obj2 = { style: tmp4Result.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
          const tmp11 = timestampProducer(TimerIcon2.TimerIcon, obj2);
          cResult[0] = tmp4Result.icon;
          cResult[1] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] !== entry) {
          const obj3 = { entry };
          const tmp15 = timestampProducer(closure_15, obj3);
          cResult[2] = entry;
          cResult[3] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] === tmp4Result.badgeContainer) {
          if (cResult[5] === tmp8) {
            if (cResult[6] === tmp12) {
              let tmp16 = cResult[7];
            }
            return tmp16;
          }
        }
        const obj4 = { style: tmp4Result.badgeContainer, children: null };
        const items = [tmp8, tmp12];
        obj4.children = items;
        const tmp19 = React5(View, obj4);
        cResult[4] = tmp4Result.badgeContainer;
        cResult[5] = tmp8;
        cResult[6] = tmp12;
        cResult[7] = tmp19;
        tmp16 = tmp19;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function CustomStatusTimestampBadge(arg0) {
      if (typeof useBadgeLocation === "function") {
        const tmp2Result = tmp2(noop.useContext(closure_11));
        obj = { style: tmp2Result.badgeContainer, children: null };
        const obj2 = { style: tmp2Result.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
        const items = [timestampProducer(TimerIcon2.TimerIcon, obj2)];
        const obj3 = { entry: tmp };
        items[1] = timestampProducer(closure_15, obj3);
        obj.children = items;
        return React5(View, obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
