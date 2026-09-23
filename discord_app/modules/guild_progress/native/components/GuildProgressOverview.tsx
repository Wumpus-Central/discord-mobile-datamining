// === Module 14333: GuildProgressOverview ===

// Module 14333 (GuildProgressOverview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4823 */;
import Pressables from "Pressables" /* 5425 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 7525 */;
import _modDef10283 from "module_10283" /* 10283 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12814 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12817 */;
import GuildProgressBarDefault from "GuildProgressBar" /* 14334 */;
import noop from "module_19" /* 19 */;

require = fn;
class GuildProgressOverviewView {
  constructor(arg0) {
    ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = global);
    tmp = closure_7();
    obj = { accessibilityRole: "button", activeOpacity: 0.4, style: tmp.container, onPress, onLongPress, children: null };
    obj1 = { style: tmp.horizontal, children: null };
    obj8 = { children: null };
    obj9 = { style: null, children: title };
    items = [, ];
    items[0] = tmp.title;
    items[1] = titleStyle;
    obj9.style = items;
    items1 = [, ];
    items1[0] = jsx(closure_0(closure_2[11]).LegacyText, obj9);
    obj10 = { style: tmp.step, variant: "text-xs/medium", color: "text-default", children: subtitle };
    items1[1] = jsx(closure_0(closure_2[12]).Text, obj10);
    obj8.children = items1;
    items2 = [, ];
    items2[0] = jsxs(View, obj8);
    obj11 = { source: closure_1(closure_2[13]) };
    items2[1] = jsx(closure_0(closure_2[11]).Icon, obj11);
    obj1.children = items2;
    items3 = [, ];
    items3[0] = jsxs(View, obj1);
    obj12 = { style: tmp.progressBar, percent: percentComplete };
    items3[1] = jsx(closure_1(closure_2[14]), obj12);
    obj.children = items3;
    return jsxs(closure_0(closure_2[10]).PressableOpacity, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = { container: { padding: 16 }, horizontal: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, title: { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginBottom: 2 }, step: { lineHeight: 16 }, progressBar: { marginTop: 8 } };
const React5 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressOverview.tsx");

export default function GuildProgressOverview(guild) {
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
  const guildProgressStep = guild(completed[6]).useGuildProgressStep(guild);
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
    onPress() {
      if (!completed) {
        const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
      }
      GuildProgressUtils.openActionSheet(guild);
    },
    onLongPress() {
      if (!flag) {
        const obj2 = { key: "GuildProgressOverviewLongPress", options: null, hasIcons: false };
        const obj3 = { label: null, onPress: null };
        const intl = util.intl;
        obj3.label = intl.string(util.t.PbNxaW);
        obj3.onPress = function onPress() {
          flag(completed[7]).dismissProgress(id.id);
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
  let intl = guild(completed[9]).intl;
  const string = intl.string;
  const t = guild(completed[9]).t;
  if (flag2) {
    let stringResult = string(t.NzxWjb);
  } else {
    stringResult = string(t.o3HK3d);
  }
  obj2.title = stringResult;
  obj2.subtitle = subtitle;
  obj2.percentComplete = percentComplete;
  return closure_5(GuildProgressOverviewView, obj2);
};
export { GuildProgressOverviewView };