import handleConnectionOpen from "handleConnectionOpen";
import { ME } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_6 = {
  onPress() {
    importDefault(15273)(ME);
  }
};
const memoResult = require("noop").memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  const tmp3 = importDefault(1348)("GuildsBarMessages");
  let obj = require(15258) /* UnreadIndicator */;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const items = [handleConnectionOpen];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === closure_4;
    }
    return tmp2;
  });
  const obj2 = require(589) /* initialize */;
  ({ badge, cutouts } = importDefault(15260)({ mentionCount: 0 }));
  const colors = importDefault(712).colors;
  obj = { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "Email", externalChildren: null, expandedChildren: null, children: 0 };
  let tmp11 = !tmp3;
  const tmp7 = importDefault(15260)({ mentionCount: 0 });
  const tmp8 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  if (!tmp3) {
    tmp11 = !stateFromStores;
  }
  obj[1] = tmp11;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[5] = closure_6;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(require(1236) /* getSystemLocale */.t.YUU0RF);
  obj[8] = badge;
  obj[9] = jsx(importDefault(15274), {});
  obj[10] = jsx(require(4752) /* ChatIcon */.ChatIcon, { color: tmp8 });
  return jsx(importDefault(15258), { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "Email", externalChildren: null, expandedChildren: null, children: 0 });
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;