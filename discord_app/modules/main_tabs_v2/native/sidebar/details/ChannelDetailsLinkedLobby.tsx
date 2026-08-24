// === Module 15952: ChannelDetailsLinkedLobby ===

// Module 15952 (ChannelDetailsLinkedLobby)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import Text2 from "Text" /* 4734 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7145 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ Fragment: c5, jsxs: closure_6, jsx: error } = jsxProd);
createCacheKey = { container: { alignItems: "center" }, divider: null };
createCacheKey = { height: 1, width: 48, marginTop: 12, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default function ChannelDetailsLinkedLobby(channel) {
  channel = channel.channel;
  let divider = callback();
  let BPDKoA = require;
  let getArticleURL = dependencyMap;
  let obj = useGetOrFetchApplications;
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
    let Text = Text2.Text;
    if (null != intl) {
      const intl3 = getSystemLocale.intl;
      obj = { applicationName: null };
      obj[0] = intl.name;
      let formatResult = intl3.format(getSystemLocale.t.SgxMJs, obj);
    } else {
      const intl2 = getSystemLocale.intl;
      formatResult = intl2.string(getSystemLocale.t.yQqVss);
    }
    obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
    const obj2 = { children: null };
    const items1 = [formatResult, "  \u2022  ", ];
    intl = getSystemLocale.intl;
    BPDKoA = getSystemLocale.t.BPDKoA;
    const obj3 = { helpdeskArticle: null };
    getArticleURL = combinedDefault.getArticleURL;
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
    const tmp8 = combinedDefault;
  }
};