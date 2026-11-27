// discord_app/modules/game_organization_invites/native/GameOrganizationIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ImageProxyUtils from "../../image_proxy/ImageProxyUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let obj = { guild: fn(12135).GuildFallbackAbstractUI, character: fn(12139).CharacterFallbackAbstractUI };
const createStyles = fn(5043);
let closure_8 = createStyles.createStyles((width, borderRadius) => {
  obj = { icon: null };
  const size = { width, height: width, borderRadius, overflow: "hidden" };
  obj.icon = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationIcon.tsx");

export default function GameOrganizationIcon(iconUrl) {
  iconUrl = iconUrl.iconUrl;
  ({ size, borderRadius } = iconUrl);
  if (borderRadius === undefined) {
    borderRadius = nativeDefault.radii.sm;
  }
  const tmp3 = closure_8(size, borderRadius);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp4[1];
  [][0] = iconUrl;
  if (null != iconUrl) {
    if (iconUrl !== tmp4[0]) {
      obj = { source: null, style: null, resizeMode: "cover", accessible: false, onError: null };
      const obj2 = { uri: null };
      const obj4 = { size };
      obj2.uri = ImageProxyUtils.getSizedImageAssetURL(iconUrl, obj4);
      obj.source = obj2;
      obj.style = tmp3.icon;
      obj.onError = tmp5;
      return <tmp9 source={null} style={null} resizeMode="cover" accessible={false} onError={null} />;
    }
  }
  return <View style={tmp3.icon}>{jsx(obj[iconUrl.fallback], { width: size, height: size, accessible: false })}</View>;
}
