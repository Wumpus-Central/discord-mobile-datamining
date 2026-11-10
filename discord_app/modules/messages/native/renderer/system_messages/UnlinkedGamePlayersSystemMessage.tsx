// discord_app/modules/messages/native/renderer/system_messages/UnlinkedGamePlayersSystemMessage.tsx
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageTypes = fn(1072).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/UnlinkedGamePlayersSystemMessage.tsx",
);

export function createUnlinkedGamePlayersSystemMessage(roleStyle, unlinkedGamePlayerPlaceholders) {
  roleStyle = roleStyle.roleStyle;
  const firstMessagePerAuthor = roleStyle(8492).getFirstMessagePerAuthor(unlinkedGamePlayerPlaceholders);
  const mapped = firstMessagePerAuthor.map((message) => {
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    const obj2 = {
      name: messageAuthorWithProcessedColor.nick,
      onClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }),
    };
    return obj2;
  });
  const obj = roleStyle(8492);
  [tmp4, tmp5] = mapped;
  if (mapped.length <= 1) {
    const intl2 = tmp(1113).intl;
    let name;
    if (tmp4 != null) {
      name = tmp4.name;
    }
    const obj3 = { a: name, aOnClick: null, count: null };
    let onClick;
    if (tmp4 != null) {
      onClick = tmp4.onClick;
    }
    obj3.aOnClick = onClick;
    obj3.count = unlinkedGamePlayerPlaceholders.length;
    let formatToPartsResult = intl2.formatToParts(tmp(1113).t.DbQxMP, obj3);
  } else if (mapped.length <= tmp(8492).MAX_NAMED_PLAYERS) {
    const intl = tmp(1113).intl;
    ({ name: obj2.a, onClick: obj2.aOnClick } = tmp4);
    ({ name: obj2.b, onClick: obj2.bOnClick } = tmp5);
    formatToPartsResult = intl.formatToParts(tmp(1113).t.Me666b, { a: null, aOnClick: null, b: null, bOnClick: null });
    const obj4 = { a: null, aOnClick: null, b: null, bOnClick: null };
  } else {
    const intl3 = tmp(1113).intl;
    const obj9 = { a: null, aOnClick: null, b: null, bOnClick: null, count: null };
    ({ name: obj5.a, onClick: obj5.aOnClick } = tmp4);
    ({ name: obj5.b, onClick: obj5.bOnClick } = tmp5);
    obj9.count = mapped.length - tmp(8492).MAX_NAMED_PLAYERS;
    formatToPartsResult = intl3.formatToParts(tmp(1113).t.Mb0AX6, obj9);
  }
  const obj10 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  obj10.type = MessageTypes.IN_GAME_MESSAGE_NUX;
  return obj10;
}
