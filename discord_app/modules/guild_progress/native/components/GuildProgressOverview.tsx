// === Module 13196: GuildProgressOverviewView ===

// Module 13196 (GuildProgressOverviewView)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
class GuildProgressOverviewView {
  constructor(arg0) {
    ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = global);
    tmp = jsxs();
    obj = { accessibilityRole: "button", activeOpacity: 0.4, style: tmp.container, onPress, onLongPress, children: null };
    obj = { style: tmp.horizontal, children: null };
    obj1 = { children: null };
    items = [, ];
    items[0] = tmp.title;
    items[1] = titleStyle;
    items1 = [, ];
    items1[0] = jsx(require("Button").LegacyText, { style: items, children: title });
    obj2 = { style: tmp.step, variant: "text-xs/medium", color: "text-default", children: subtitle };
    items1[1] = jsx(require("Text").Text, obj2);
    obj1[0] = items1;
    items2 = [, ];
    items2[0] = jsxs(View, obj1);
    obj3 = { source: null };
    obj3[0] = require("registerAsset");
    items2[1] = jsx(require("Button").Icon, obj3);
    obj[1] = items2;
    items3 = [, ];
    items3[0] = jsxs(View, obj);
    obj4 = { style: tmp.progressBar, percent: percentComplete };
    items3[1] = jsx(require("GuildProgressBar"), obj4);
    obj[5] = items3;
    return jsxs(require("PressableBase").PressableOpacity, obj);
  }
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { padding: 16 }, horizontal: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, title: null, step: null, progressBar: null };
createCacheKey = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, marginBottom: 2 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { lineHeight: 16 };
createCacheKey[4] = { marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("ME").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressOverview.tsx");

export default function GuildProgressOverview(guild) {
  let percentComplete;
  let subtitle;
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
  let obj = guild(completed[6]);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  completed = guildProgressStep.completed;
  let items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = React.useEffect(() => {
    if (completed) {
      const result = flag(completed[7]).markCompletedProgressSeen(guild.id);
      const obj = flag(completed[7]);
    }
  }, items);
  obj = {
    titleStyle: guild.titleStyle,
    onPress() {
      if (!completed) {
        const progress = flag(completed[7]).createProgress(guild.id);
        const obj = flag(completed[7]);
      }
      guild(completed[6]).openActionSheet(guild);
    },
    onLongPress() {
      if (!flag) {
        let obj = guild(completed[8]);
        obj = { key: "GuildProgressOverviewLongPress", options: null, hasIcons: false };
        obj = { label: null, onPress: null };
        const intl = guild(completed[9]).intl;
        obj[0] = intl.string(guild(completed[9]).t.PbNxaW);
        obj[1] = function onPress() {
          outer1_1(outer1_2[7]).dismissProgress(id.id);
        };
        const items = [obj];
        obj[1] = items;
        const result = obj.showSimpleActionSheet(obj);
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
  obj[3] = stringResult;
  obj[4] = subtitle;
  obj[5] = percentComplete;
  return closure_5(GuildProgressOverviewView, obj);
};
export { GuildProgressOverviewView };