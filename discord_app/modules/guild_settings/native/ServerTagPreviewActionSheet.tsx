// === Module 14188: ServerTagPreviewActionSheet ===

// Module 14188 (ServerTagPreviewActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9843 */;
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview" /* 14189 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildProfileFetchStatus = fn(9841).GuildProfileFetchStatus;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { error: { paddingVertical: nativeDefault.space.PX_24, alignItems: "center", rowGap: nativeDefault.space.PX_12 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default function ServerTagPreviewActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_8();
  const guildProfile1 = guildId(9842).useGuildProfile(guildId);
  let guildProfile = guildProfile1.guildProfile;
  const items = [guildId];
  const effect = noop.useEffect(() => {
    const guildProfile = GuildProfileActionCreators.getGuildProfile(guildId, false, { respectBackoff: true });
  }, items);
  if (null != guildProfile) {
    const obj2 = { guildId, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: false, variant: "plain", onAdopted: null };
    ({ tag: obj5.tag, badge: obj5.badge, badgeColorPrimary: obj5.primaryColor, badgeColorSecondary: obj5.secondaryColor } = guildProfile);
    obj2.onAdopted = function onAdopted() {
      return ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    let tmp7 = closure_6(GuildSettingsServerTagPreviewDefault, obj2);
    let tmp8 = closure_6;
  } else if (guildProfile1.fetchStatus === GuildProfileFetchStatus.FETCHED) {
    const obj3 = { style: tmp.error, children: null };
    const obj4 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(1115).intl;
    obj4.children = intl.string(tmp2(1115).t.tmGHjc);
    const items1 = [closure_6(tmp2(4753).Text, obj4), ];
    const obj6 = { variant: "secondary", text: null, onPress: null };
    const intl2 = tmp2(1115).intl;
    obj6.text = intl2.string(tmp2(1115).t["5911Lb"]);
    obj6.onPress = function onPress() {
      return GuildProfileActionCreators.getGuildProfile(guildId, true);
    };
    items1[1] = closure_6(tmp2(5187).Button, obj6);
    obj3.children = items1;
    tmp7 = closure_7(View, obj3);
    tmp8 = closure_6;
  } else {
    tmp7 = closure_6(tmp2(7286).SceneLoadingIndicator, {});
    tmp8 = closure_6;
  }
  const obj7 = { children: null };
  const obj13 = { title: null };
  const intl3 = tmp2(1115).intl;
  obj13.title = intl3.string(guildId(1115).t["2QmKZ2"]);
  const items2 = [tmp8(guildId(7396).BottomSheetTitleHeader, obj13), tmp7];
  obj7.children = items2;
  return closure_7(guildId(7444).ActionSheet, obj7);
};