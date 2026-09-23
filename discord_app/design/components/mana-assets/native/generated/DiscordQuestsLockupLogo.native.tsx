// discord_app/design/components/mana-assets/native/generated/DiscordQuestsLockupLogo.native.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../tokens/native/useToken.tsx";
import _modDef6235 from "../../../../../../discord_assets/assets/mana/asset-library/generated/DiscordQuestsLockupLogo-2x.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/DiscordQuestsLockupLogo.native.tsx",
);

export const DiscordQuestsLockupLogo = function DiscordQuestsLockupLogo(color) {
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  let num = color.width;
  if (num === undefined) {
    num = 224;
  }
  let num2 = color.height;
  if (num2 === undefined) {
    num2 = 57;
  }
  let num3 = color.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const token = useToken.useToken(ICON_STRONG);
  if (null != token) {
    const obj2 = { tintColor: token };
    let tmp6 = obj2;
  } else {
    if (tmp5) {
      const obj3 = { tintColor: ICON_STRONG };
      tmp6 = obj3;
    }
    tmp5 = null != ICON_STRONG && typeof ICON_STRONG === "string";
  }
  const obj4 = {
    fadeDuration: 0,
    source: null,
    style: null,
    accessible: null,
    accessibilityLabel: null,
    resizeMode: null,
  };
  obj4.source = { uri: _modDef6235 };
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size, tmp6];
  obj4.style = items;
  obj4.accessible = accessible;
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.resizeMode = resizeMode;
  return (
    <Image fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />
  );
};
