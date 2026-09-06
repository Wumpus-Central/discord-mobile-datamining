// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx",
);

export default function GuildBoostingMarketingWave(arg0) {
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  obj = { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" };
  const merged = Object.assign(arg0);
  obj.children = jsx(inlineStyles.Path, {
    d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z",
    fill: token,
  });
  return jsx(inlineStylesDefault, { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" });
}
