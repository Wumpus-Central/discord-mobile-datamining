// discord_app/modules/video_calls/native/components/ParticipantTitle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import getParticipantTitleDefault from "../../getParticipantTitle.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { usernameText: null };
createCacheKey = { fontSize: 14, color: ThemesDefault.colors.WHITE };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  ({ channel, participant, style } = arg0);
  const tmp = callback();
  const items = [tmp.usernameText, style];
  return jsx(Button.LegacyText, { style: items, numberOfLines: 1, children: getParticipantTitleDefault(channel, participant) });
};