// discord_app/modules/video_calls/native/components/ParticipantTitle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import getParticipantTitleDefault from "../../getParticipantTitle.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { fontSize: 14, color: ThemesDefault.colors.WHITE };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  ({ channel, participant, style } = arg0);
  const tmp = callback();
  const items = [tmp.usernameText, style];
  return jsx(Button.LegacyText, { style: items, numberOfLines: 1, children: getParticipantTitleDefault(channel, participant) });
};