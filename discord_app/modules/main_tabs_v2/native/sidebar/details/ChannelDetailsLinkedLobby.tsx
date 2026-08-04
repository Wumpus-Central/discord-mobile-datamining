// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
({ Fragment: c5, jsxs: closure_6, jsx: error } = jsxProd);
createCacheKey = { container: { alignItems: "center" }, divider: null };
createCacheKey = { height: 1, width: 48, marginTop: 12, backgroundColor: require("Themes").colors.BORDER_STRONG };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default function ChannelDetailsLinkedLobby(channel) {
  channel = channel.channel;
  let divider = createCacheKey();
  let BPDKoA = require;
  let getArticleURL = dependencyMap;
  let obj = require(5525) /* useGetOrFetchApplications */;
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  let intl = obj.useGetOrFetchApplication(application_id);
  if (null == channel.linkedLobby) {
    return null;
  } else {
    obj = { style: null, children: null };
    const items = [divider.container, channel.containerStyle];
    obj[0] = items;
    let Text = BPDKoA(4189).Text;
    if (null != intl) {
      const intl3 = BPDKoA(1236).intl;
      obj = { applicationName: null };
      obj[0] = intl.name;
      let formatResult = intl3.format(BPDKoA(1236).t.SgxMJs, obj);
    } else {
      const intl2 = BPDKoA(1236).intl;
      formatResult = intl2.string(BPDKoA(1236).t.yQqVss);
    }
    const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
    const obj2 = { children: null };
    const items1 = [formatResult, "  \u2022  ", ];
    intl = BPDKoA(1236).intl;
    BPDKoA = BPDKoA(1236).t.BPDKoA;
    const obj3 = { helpdeskArticle: null };
    getArticleURL = importDefault(1945).getArticleURL;
    obj3[0] = getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
    items1[2] = intl.format(BPDKoA, obj3);
    obj2[0] = items1;
    obj1[2] = closure_6(closure_5, obj2);
    const items2 = [closure_7(Text, obj1), ];
    const obj4 = { style: null };
    divider = divider.divider;
    obj4[0] = divider;
    Text = tmp4(tmp3, obj4);
    items2[1] = Text;
    obj[1] = items2;
    closure_6(View, obj);
    const tmp5 = closure_5;
    const tmp8 = importDefault(1945);
  }
};