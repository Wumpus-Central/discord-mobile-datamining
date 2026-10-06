// === Module 13809: GuildProgressOverview ===

// Module 13809 (GuildProgressOverview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 6700 */;
import AssetRegistryDefault from "AssetRegistry" /* 9615 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12145 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12148 */;
import GuildProgressBarDefault from "GuildProgressBar" /* 13810 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { padding: 16 }, horizontal: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, title: obj2, step: { lineHeight: 16 }, progressBar: { marginTop: 8 } };
obj2 = { fontSize: 16, lineHeight: 20, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginBottom: 2 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let closure_1;
  let completed;
  let longPressDisabled;
  let percentComplete;
  let resume;
  let subtitle;
  let titleStyle;
  let obj = guild(completed[7]);
  const cResult = obj.c(19);
  guild = guild.guild;
  ({ titleStyle, longPressDisabled, resume } = guild);
  const tmp4 = undefined !== longPressDisabled && longPressDisabled;
  importDefault = tmp4;
  const tmpResult = guild(completed[8]);
  const guildProgressStep = tmpResult.useGuildProgressStep(guild);
  ({ percentComplete, subtitle, completed } = guildProgressStep);
  if (cResult[0] === completed) {
    let tmp7;
    let tmp8;
    if (cResult[1] === guild.id) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const effect = react.useEffect(tmp7, tmp8);
    if (cResult[4] === guild.id) {
      let tmp11;
      if (cResult[5] === tmp4) {
        tmp11 = cResult[6];
      }
      if (cResult[7] === completed) {
        let tmp12;
        let tmp13;
        if (cResult[8] === guild) {
          tmp12 = cResult[9];
        }
        if (cResult[10] !== (undefined !== resume && resume)) {
          let stringResult;
          let intl = tmp(completed[11]).intl;
          const string = intl.string;
          class I {
            constructor() {
              if (!completed) {
                const obj = GuildProgressActionCreatorsDefault;
                const progress = obj.createProgress(guild.id);
              }
              const obj2 = GuildProgressUtils;
              obj2.openActionSheet(guild);
            }
          }
          if (undefined !== resume && resume) {
            stringResult = string(tmp14.NzxWjb);
          } else {
            stringResult = string(tmp14.o3HK3d);
          }
          cResult[10] = undefined !== resume && resume;
          cResult[11] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[11];
        }
        class I {
          constructor() {
            if (!completed) {
              const obj = GuildProgressActionCreatorsDefault;
              const progress = obj.createProgress(guild.id);
            }
            const obj2 = GuildProgressUtils;
            obj2.openActionSheet(guild);
          }
        }
        let obj2 = { titleStyle, onPress: tmp12, onLongPress: tmp11, title: tmp13, subtitle, percentComplete };
        cResult[12] = tmp11;
        cResult[13] = tmp12;
        cResult[14] = percentComplete;
        cResult[15] = subtitle;
        cResult[16] = tmp13;
        cResult[17] = titleStyle;
        cResult[18] = closure_5(closure_8, obj2);
        const tmp19 = closure_5(closure_8, obj2);
      }
      class I {
        constructor() {
          if (!completed) {
            const obj = GuildProgressActionCreatorsDefault;
            const progress = obj.createProgress(guild.id);
          }
          const obj2 = GuildProgressUtils;
          obj2.openActionSheet(guild);
        }
      }
      cResult[7] = completed;
      cResult[8] = guild;
      cResult[9] = I;
      tmp12 = I;
    }
    const fn2 = function c() {
      let id;
      let intl;
      let items;
      if (!closure_1) {
        let obj = { key: "GuildProgressOverviewLongPress", options: items, hasIcons: false };
        const obj2 = {
          label: intl.string(intl2.t.PbNxaW),
          onPress() {
              const obj = closure_1(completed[9]);
              obj.dismissProgress(id.id);
            }
        };
        const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
        showSimpleActionSheet2;
        intl = intl2.intl;
        items = [obj2];
        const result = showSimpleActionSheet(obj);
      }
    };
    cResult[4] = guild.id;
    cResult[5] = tmp4;
    cResult[6] = fn2;
    tmp11 = fn2;
  }
  const fn = function n() {
    if (completed) {
      const obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(guild.id);
    }
  };
  let items = [completed, guild.id];
  cResult[0] = completed;
  cResult[1] = guild.id;
  cResult[2] = fn;
  cResult[3] = items;
  tmp8 = items;
  tmp7 = fn;
}) : ((guild) => {
  let percentComplete;
  let stringResult;
  let subtitle;
  guild = guild.guild;
  let flag = guild.longPressDisabled;
  const titleStyle = guild.titleStyle;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.resume;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let completed;
  let obj = guild(completed[8]);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  completed = guildProgressStep.completed;
  let items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = react.useEffect(() => {
    if (completed) {
      const obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(guild.id);
    }
  }, items);
  let obj2 = {
    titleStyle,
    onPress() {
      if (!completed) {
        const obj = GuildProgressActionCreatorsDefault;
        const progress = obj.createProgress(guild.id);
      }
      const obj2 = GuildProgressUtils;
      obj2.openActionSheet(guild);
    },
    onLongPress() {
      let id;
      let intl;
      let items;
      if (!flag) {
        let obj = { key: "GuildProgressOverviewLongPress", options: items, hasIcons: false };
        const obj2 = {
          label: intl.string(intl2.t.PbNxaW),
          onPress() {
              const obj = flag(completed[9]);
              obj.dismissProgress(id.id);
            }
        };
        const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
        showSimpleActionSheet2;
        intl = intl2.intl;
        items = [obj2];
        const result = showSimpleActionSheet(obj);
      }
    },
    title: stringResult,
    subtitle,
    percentComplete
  };
  let intl = guild(completed[11]).intl;
  const string = intl.string;
  const t = guild(completed[11]).t;
  if (flag2) {
    stringResult = string(t.NzxWjb);
  } else {
    stringResult = string(t.o3HK3d);
  }
  return closure_5(closure_8, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let items2;
  let onLongPress;
  let onPress;
  let percentComplete;
  let subtitle;
  let title;
  let titleStyle;
  const obj = react2;
  const cResult = obj.c(25);
  ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === tmp4.title) {
    let tmp5;
    if (cResult[1] === titleStyle) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      let tmp6;
      if (cResult[4] === title) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4.step) {
        let tmp9;
        if (cResult[7] === subtitle) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          let tmp12;
          let tmp17;
          if (cResult[10] === tmp9) {
            tmp12 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { source: AssetRegistryDefault };
            const Icon = native.Icon;
            const tmp20 = hasOwnProperty(Icon, obj2);
            cResult[12] = tmp20;
            tmp17 = tmp20;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === tmp4.horizontal) {
            let tmp21;
            if (cResult[14] === tmp12) {
              tmp21 = cResult[15];
            }
            if (cResult[16] === percentComplete) {
              let tmp25;
              if (cResult[17] === tmp4.progressBar) {
                tmp25 = cResult[18];
              }
              if (cResult[19] === onLongPress) {
                if (cResult[20] === onPress) {
                  if (cResult[21] === tmp4.container) {
                    if (cResult[22] === tmp21) {
                      let tmp29;
                      if (cResult[23] === tmp25) {
                        tmp29 = cResult[24];
                      }
                      return tmp29;
                    }
                  }
                }
              }
              const obj3 = { accessibilityRole: "button", activeOpacity: 0.4, style: tmp4.container, onPress, onLongPress, children: items };
              items = [tmp21, tmp25];
              const tmp31 = metroRequire(Pressables.PressableOpacity, obj3);
              cResult[19] = onLongPress;
              cResult[20] = onPress;
              cResult[21] = tmp4.container;
              cResult[22] = tmp21;
              cResult[23] = tmp25;
              cResult[24] = tmp31;
              tmp29 = tmp31;
            }
            const obj4 = { style: tmp4.progressBar, percent: percentComplete };
            const tmp28 = hasOwnProperty(GuildProgressBarDefault, obj4);
            cResult[16] = percentComplete;
            cResult[17] = tmp4.progressBar;
            cResult[18] = tmp28;
            tmp25 = tmp28;
          }
          const obj5 = { style: tmp4.horizontal, children: items1 };
          items1 = [tmp12, tmp17];
          const tmp24 = metroRequire(View, obj5);
          cResult[13] = tmp4.horizontal;
          cResult[14] = tmp12;
          cResult[15] = tmp24;
          tmp21 = tmp24;
        }
        const obj6 = { children: items2 };
        items2 = [tmp6, tmp9];
        const tmp15 = metroRequire(View, obj6);
        cResult[9] = tmp6;
        cResult[10] = tmp9;
        cResult[11] = tmp15;
        tmp12 = tmp15;
      }
      const obj7 = { style: tmp4.step, variant: "text-xs/medium", color: "text-default", children: subtitle };
      const tmp11 = hasOwnProperty(Text_Text.Text, obj7);
      cResult[6] = tmp4.step;
      cResult[7] = subtitle;
      cResult[8] = tmp11;
      tmp9 = tmp11;
    }
    const obj8 = { style: tmp5, children: title };
    const tmp8 = hasOwnProperty(native.LegacyText, obj8);
    cResult[3] = tmp5;
    cResult[4] = title;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items3 = [tmp4.title, titleStyle];
  cResult[0] = tmp4.title;
  cResult[1] = titleStyle;
  cResult[2] = items3;
  tmp5 = items3;
}) : ((arg0) => {
  let items;
  let items1;
  let items2;
  let items3;
  let onLongPress;
  let onPress;
  let percentComplete;
  let subtitle;
  let title;
  let titleStyle;
  ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = arg0);
  const tmp = closure_7();
  const obj = { accessibilityRole: "button", activeOpacity: 0.4, style: tmp.container, onPress, onLongPress, children: items3 };
  const obj2 = { style: tmp.horizontal, children: items2 };
  const obj3 = { children: items1 };
  const PressableOpacity = Pressables.PressableOpacity;
  const obj4 = { style: items, children: title };
  items = [tmp.title, titleStyle];
  items1 = [hasOwnProperty(native.LegacyText, obj4), ];
  const obj5 = { style: tmp.step, variant: "text-xs/medium", color: "text-default", children: subtitle };
  items1[1] = hasOwnProperty(Text_Text.Text, obj5);
  items2 = [metroRequire(View, obj3), ];
  const obj6 = { source: AssetRegistryDefault };
  const Icon = native.Icon;
  items2[1] = hasOwnProperty(Icon, obj6);
  items3 = [metroRequire(View, obj2), ];
  const obj7 = { style: tmp.progressBar, percent: percentComplete };
  items3[1] = hasOwnProperty(GuildProgressBarDefault, obj7);
  return metroRequire(PressableOpacity, obj);
});
let closure_8 = tmp4;
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressOverview.tsx");

export default tmp3;
export const GuildProgressOverviewView = tmp4;