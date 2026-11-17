// discord_app/modules/user_profile/native/UserProfileGameWidgetEmptyStatePrompt.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameWidgetEmptyStatePrompt.tsx");

export default function UserProfileGameWidgetEmptyStatePrompt(arg0) {
  ({ widgetType, style } = arg0);
  const widgetMaxGamesResult = WidgetUtils.widgetMaxGames(widgetType);
  const obj2 = { variant: "body-sm/medium", color: "text-muted", style, children: null };
  if (1 === widgetMaxGamesResult) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["3FdPBT"]);
  } else {
    const intl = util.intl;
    const obj3 = { maxGames: widgetMaxGamesResult };
    stringResult = intl.formatToPlainString(util.t.W8K2GH, obj3);
  }
  obj2.children = stringResult;
  return jsx(Text_Text.Text, { variant: "body-sm/medium", color: "text-muted", style, children: null });
}
