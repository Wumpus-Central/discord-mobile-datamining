// === Module 14131: GuildProgressOverview ===

// Module 14131 (GuildProgressOverview)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 6884 */;
import _modDef10978 from "module_10978" /* 10978 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12163 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12166 */;
import GuildProgressBarDefault from "GuildProgressBar" /* 14132 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { padding: 16 }, horizontal: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, title: { fontSize: 16, lineHeight: 20, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginBottom: 2 }, step: { lineHeight: 16 }, progressBar: { marginTop: 8 } };
let closure_7 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { fontSize: 16, lineHeight: 20, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginBottom: 2 };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProgressOverviewView(arg0) {
  const cResult = c.c(25);
  ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === tmp4.title) {
    if (cResult[1] === titleStyle) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === title) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4.step) {
        if (cResult[7] === subtitle) {
          let tmp9 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp9) {
            let tmp12 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { source: _modDef10978 };
            const tmp20 = hasOwnProperty(native.Icon, obj2);
            cResult[12] = tmp20;
            let tmp17 = tmp20;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === tmp4.horizontal) {
            if (cResult[14] === tmp12) {
              let tmp21 = cResult[15];
            }
            if (cResult[16] === percentComplete) {
              if (cResult[17] === tmp4.progressBar) {
                let tmp25 = cResult[18];
              }
              if (cResult[19] === onLongPress) {
                if (cResult[20] === onPress) {
                  if (cResult[21] === tmp4.container) {
                    if (cResult[22] === tmp21) {
                      if (cResult[23] === tmp25) {
                        let tmp29 = cResult[24];
                      }
                      return tmp29;
                    }
                  }
                }
              }
              const obj3 = { accessibilityRole: "button", activeOpacity: 0.4, style: tmp4.container, onPress, onLongPress, children: null };
              const items = [tmp21, tmp25];
              obj3.children = items;
              const tmp31 = timestampProducer(Pressables.PressableOpacity, obj3);
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
          const obj5 = { style: tmp4.horizontal, children: null };
          const items1 = [tmp12, tmp17];
          obj5.children = items1;
          const tmp24 = timestampProducer(View, obj5);
          cResult[13] = tmp4.horizontal;
          cResult[14] = tmp12;
          cResult[15] = tmp24;
          tmp21 = tmp24;
        }
        const obj6 = { children: null };
        const items2 = [tmp6, tmp9];
        obj6.children = items2;
        const tmp15 = timestampProducer(View, obj6);
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
}) : (function GuildProgressOverviewView(arg0) {
  ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = arg0);
  const tmp = closure_7();
  const obj = { accessibilityRole: "button", activeOpacity: 0.4, style: tmp.container, onPress, onLongPress, children: null };
  const obj2 = { style: tmp.horizontal, children: null };
  const obj3 = { children: null };
  const obj4 = { style: null, children: title };
  const items = [tmp.title, titleStyle];
  obj4.style = items;
  const items1 = [hasOwnProperty(native.LegacyText, obj4), hasOwnProperty(Text_Text.Text, { style: tmp.step, variant: "text-xs/medium", color: "text-default", children: subtitle })];
  obj3.children = items1;
  const items2 = [timestampProducer(View, obj3), hasOwnProperty(native.Icon, { source: _modDef10978 })];
  obj2.children = items2;
  const items3 = [timestampProducer(View, obj2), hasOwnProperty(GuildProgressBarDefault, { style: tmp.progressBar, percent: percentComplete })];
  obj.children = items3;
  return timestampProducer(Pressables.PressableOpacity, obj);
});
let closure_8 = tmp4;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressOverview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProgressOverview(guild) {
  const cResult = guild(completed[7]).c(19);
  guild = guild.guild;
  ({ titleStyle, longPressDisabled, resume } = guild);
  closure_1 = tmp4;
  let obj = guild(completed[7]);
  const guildProgressStep = guild(completed[8]).useGuildProgressStep(guild);
  ({ percentComplete, subtitle, completed } = guildProgressStep);
  if (cResult[0] === completed) {
    if (cResult[1] === guild.id) {
      let tmp7 = cResult[2];
      let tmp8 = cResult[3];
    }
    const effect = noop.useEffect(tmp7, tmp8);
    if (cResult[4] === guild.id) {
      if (cResult[5] === tmp4) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === completed) {
        if (cResult[8] === guild) {
          let tmp12 = cResult[9];
        }
        if (cResult[10] !== tmp5) {
          let intl = tmp(completed[11]).intl;
          const string = intl.string;
          let NzxWjb = tmp(completed[11]).t;
          if (tmp5) {
            NzxWjb = NzxWjb.NzxWjb;
            let stringResult = string(NzxWjb);
          } else {
            stringResult = string(NzxWjb.o3HK3d);
          }
          cResult[10] = tmp5;
          cResult[11] = stringResult;
        } else {
          if (cResult[12] === tmp11) {
            if (cResult[13] === tmp12) {
              if (cResult[14] === percentComplete) {
                if (cResult[15] === subtitle) {
                  if (cResult[16] === tmp13) {
                    if (cResult[17] === titleStyle) {
                      let tmp16 = cResult[18];
                    }
                    return tmp16;
                  }
                }
              }
            }
          }
          let obj2 = { titleStyle, onPress: tmp12, onLongPress: tmp11, title: cResult[11], subtitle, percentComplete };
          const tmp19 = closure_5(closure_8, obj2);
          cResult[12] = tmp11;
          cResult[13] = tmp12;
          cResult[14] = percentComplete;
          cResult[15] = subtitle;
          cResult[16] = cResult[11];
          cResult[17] = titleStyle;
          cResult[18] = tmp19;
          tmp16 = tmp19;
        }
      }
      function openProgressSheet() {
        if (!completed) {
          const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
        }
        GuildProgressUtils.openActionSheet(guild);
      }
      cResult[7] = completed;
      cResult[8] = guild;
      cResult[9] = openProgressSheet;
      tmp12 = openProgressSheet;
    }
    function handleLongPress() {
      if (!closure_1) {
        const obj2 = { key: "GuildProgressOverviewLongPress", options: null, hasIcons: false };
        const obj3 = { label: null, onPress: null };
        const intl = util.intl;
        obj3.label = intl.string(util.t.PbNxaW);
        obj3.onPress = function onPress() {
          closure_1(completed[9]).dismissProgress(id.id);
        };
        const items = [obj3];
        obj2.options = items;
        const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
      }
    }
    cResult[4] = guild.id;
    cResult[5] = tmp4;
    cResult[6] = handleLongPress;
    tmp11 = handleLongPress;
  }
  const fn = function o() {
    if (completed) {
      const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(guild.id);
    }
  };
  let items = [completed, guild.id];
  cResult[0] = completed;
  cResult[1] = guild.id;
  cResult[2] = fn;
  cResult[3] = items;
  tmp8 = items;
  tmp7 = fn;
  const tmpResult = guild(completed[8]);
}) : (function GuildProgressOverview(guild) {
  guild = guild.guild;
  let flag = guild.longPressDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.resume;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let completed;
  const guildProgressStep = guild(completed[8]).useGuildProgressStep(guild);
  completed = guildProgressStep.completed;
  let items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = noop.useEffect(() => {
    if (completed) {
      const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(guild.id);
    }
  }, items);
  let obj2 = {
    titleStyle: guild.titleStyle,
    onPress: function openProgressSheet() {
      if (!completed) {
        const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
      }
      GuildProgressUtils.openActionSheet(guild);
    },
    onLongPress: function handleLongPress() {
      if (!flag) {
        const obj2 = { key: "GuildProgressOverviewLongPress", options: null, hasIcons: false };
        const obj3 = { label: null, onPress: null };
        const intl = util.intl;
        obj3.label = intl.string(util.t.PbNxaW);
        obj3.onPress = function onPress() {
          flag(completed[9]).dismissProgress(id.id);
        };
        const items = [obj3];
        obj2.options = items;
        const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
      }
    },
    title: null,
    subtitle: null,
    percentComplete: null
  };
  let intl = guild(completed[11]).intl;
  const string = intl.string;
  const t = guild(completed[11]).t;
  if (flag2) {
    let stringResult = string(t.NzxWjb);
  } else {
    stringResult = string(t.o3HK3d);
  }
  obj2.title = stringResult;
  obj2.subtitle = subtitle;
  obj2.percentComplete = percentComplete;
  return closure_5(closure_8, obj2);
});
export const GuildProgressOverviewView = tmp4;