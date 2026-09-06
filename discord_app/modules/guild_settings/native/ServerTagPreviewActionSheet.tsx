// === Module 13912: ServerTagPreviewActionSheet ===

// Module 13912 (ServerTagPreviewActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9188 */;
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview" /* 13913 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildProfileFetchStatus = fn(9065).GuildProfileFetchStatus;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { error: null };
createStyles = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center", rowGap: nativeDefault.space.PX_12 };
createStyles.error = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default function ServerTagPreviewActionSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(9187);
  let guildProfile = obj.useGuildProfile(guildId);
  guildProfile = guildProfile.guildProfile;
  const items = [guildId];
  const effect = noop.useEffect(() => {
    const guildProfile = GuildProfileActionCreators.getGuildProfile(guildId, false, { respectBackoff: true });
  }, items);
  if (null != guildProfile) {
    obj = { guildId, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: false, variant: "plain", onAdopted: null };
    ({ tag: obj5.tag, badge: obj5.badge, badgeColorPrimary: obj5.primaryColor, badgeColorSecondary: obj5.secondaryColor } = guildProfile);
    obj.onAdopted = function onAdopted() {
      return ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    let tmp7 = closure_6(GuildSettingsServerTagPreviewDefault, obj);
    let tmp8 = closure_6;
  } else if (guildProfile.fetchStatus === GuildProfileFetchStatus.FETCHED) {
    obj = { style: tmp.error, children: null };
    const obj1 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(1114).intl;
    obj1.children = intl.string(tmp2(1114).t.tmGHjc);
    const items1 = [closure_6(tmp2(4556).Text, obj1), ];
    const obj2 = { variant: "secondary", text: null, onPress: null };
    const intl2 = tmp2(1114).intl;
    obj2.text = intl2.string(tmp2(1114).t["5911Lb"]);
    obj2.onPress = function onPress() {
      return GuildProfileActionCreators.getGuildProfile(guildId, true);
    };
    items1[1] = closure_6(tmp2(4975).Button, obj2);
    obj.children = items1;
    tmp7 = closure_7(View, obj);
    tmp8 = closure_6;
  } else {
    tmp7 = closure_6(tmp2(7039).SceneLoadingIndicator, {});
    tmp8 = closure_6;
  }
  const obj3 = { children: null };
  const obj4 = { title: null };
  const intl3 = tmp2(1114).intl;
  obj4.title = intl3.string(guildId(1114).t["2QmKZ2"]);
  const items2 = [tmp8(guildId(7149).BottomSheetTitleHeader, obj4), tmp7];
  obj3.children = items2;
  return closure_7(guildId(7198).ActionSheet, obj3);
};