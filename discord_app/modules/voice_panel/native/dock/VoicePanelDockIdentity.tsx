// discord_app/modules/voice_panel/native/dock/VoicePanelDockIdentity.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import native from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native2 from "../../../../design/void/native.tsx";
import useChannelName from "../../../channel/useChannelName.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import isRoleRequiredDefault from "../../../channel/isRoleRequired.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useDockBoxShadowDefault from "useDockBoxShadow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const nativeDefault = native;
const GuildIconDefault = GuildIcon;

require = fn;
function DockChannelIcon() {
  const tmp = closure_11();
  const tmp4Result = useDockBoxShadowDefault(native.Shadow.SHADOW_MEDIUM);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ channelId: require, guildId: importDefault } = context);
  const items = [GuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(importDefault));
  const items1 = [ChannelStore, UserStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    if (null != importDefault) {
      return null;
    } else {
      const channel = ChannelStore.getChannel(require);
      let first;
      if (channel != null) {
        const recipients = channel.recipients;
        if (recipients != null) {
          first = recipients[0];
        }
      }
      let user = null;
      if (null != first) {
        user = UserStore.getUser(first);
      }
      return user;
    }
  });
  if (null != stateFromStores) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.guildIcon];
    const obj4 = { boxShadow: tmp4Result };
    items2[1] = obj4;
    obj3.style = items2;
    const obj5 = { guild: stateFromStores, size: GuildIcon.GuildIconSizes.SMALL_32, style: tmp.guildIconAsset };
    obj3.children = closure_9(GuildIconDefault, obj5);
    let tmp12 = closure_9(View, obj3);
    const tmp2Result = GuildIconDefault;
  } else {
    tmp12 = null;
    if (null != stateFromStores1) {
      const obj6 = { style: null, children: null };
      const items3 = [tmp.avatarShadow];
      const obj7 = { boxShadow: tmp4Result };
      items3[1] = obj7;
      obj6.style = items3;
      const obj8 = { user: stateFromStores1, guildId: "Array", size: native2.AvatarSizes.REFRESH_MEDIUM_32 };
      obj6.children = closure_9(native2.Avatar, obj8);
      tmp12 = closure_9(View, obj6);
    }
  }
  return tmp12;
}
const View = fn(17).View;
const VoicePanelDockConstants = fn(11241);
({ DOCK_TILE_RADIUS, DOCK_TILE_SIZE, DOCK_GAP, DOCK_GLYPH_GAP } = VoicePanelDockConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5014);
let obj = {
  identity: { flexDirection: "row", alignItems: "center", gap: DOCK_GAP },
  guildIcon: null,
  guildIconAsset: null,
  avatarShadow: null,
  titleRow: null,
  title: null,
};
let size = {
  width: DOCK_TILE_SIZE,
  height: DOCK_TILE_SIZE,
  borderRadius: DOCK_TILE_RADIUS,
  outlineWidth: 1,
  outlineColor: nativeDefault.colors.BORDER_SUBTLE,
  outlineStyle: "solid",
  outlineOffset: -1,
};
obj.guildIcon = size;
obj.guildIconAsset = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS };
const size1 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: nativeDefault.radii.round };
obj.avatarShadow = size1;
obj.titleRow = { flexShrink: 1, flexDirection: "row", alignItems: "center", gap: DOCK_GLYPH_GAP };
obj.title = { flexShrink: 1 };
let closure_11 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockIdentity.tsx");

export default noop.memo(function VoicePanelDockIdentity() {
  const tmp = closure_11();
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(
    items,
    () => isRoleRequiredDefault(ChannelStore.getChannel(channelId)),
    items1,
  );
  let obj = channelId(504);
  const items2 = [ChannelStore, UserStore, RelationshipStore];
  const obj3 = { style: tmp.identity, children: null };
  const stateFromStores1 = channelId(504).useStateFromStores(items2, () => {
    const channel = ChannelStore.getChannel(channelId);
    let str = "";
    if (null != channel) {
      str = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    }
    return str;
  });
  const items3 = [closure_9(DockChannelIcon, {})];
  const obj4 = { style: tmp.titleRow, children: null };
  if (stateFromStores) {
    let VoiceNormalIcon = tmp4(8670).VoiceLockIcon;
  } else {
    VoiceNormalIcon = tmp4(8673).VoiceNormalIcon;
  }
  const obj2 = channelId(504);
  const items4 = [
    closure_9(VoiceNormalIcon, { size: "sm", color: nativeDefault.colors.ICON_DEFAULT }),
    closure_9(channelId(5624).Text, {
      variant: "text-md/medium",
      color: "text-default",
      lineClamp: 1,
      style: tmp.title,
      children: stateFromStores1,
    }),
  ];
  obj4.children = items4;
  items3[1] = closure_10(View, obj4);
  obj3.children = items3;
  return closure_10(View, obj3);
});
