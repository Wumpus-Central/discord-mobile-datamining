// === Module 16554: ChannelDetailsLinkedLobby ===

// Module 16554 (ChannelDetailsLinkedLobby)
import nativeDefault from "native" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6589 */;
import noop from "module_19" /* 19 */;

const util = BPDKoA(1115);
const Text_Text = BPDKoA(4832);
require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ Fragment: hasOwnProperty, jsxs: metroRequire, jsx: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { alignItems: "center" }, divider: null };
let size = { height: 1, width: 48, marginTop: 12, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj2.divider = size;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default function ChannelDetailsLinkedLobby(channel) {
  channel = channel.channel;
  let divider = closure_8();
  let BPDKoA = require;
  let getArticleURL = dependencyMap;
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  let intl = useGetOrFetchApplications.useGetOrFetchApplication(application_id);
  if (null == channel.linkedLobby) {
    return null;
  } else {
    const obj2 = { style: null, children: null };
    const items = [divider.container, channel.containerStyle];
    obj2.style = items;
    let Text = Text_Text.Text;
    if (null != intl) {
      const intl3 = util.intl;
      const obj3 = { applicationName: intl.name };
      let formatResult = intl3.format(util.t.SgxMJs, obj3);
    } else {
      const intl2 = util.intl;
      formatResult = intl2.string(util.t.yQqVss);
    }
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
    const obj5 = { children: null };
    const items1 = [formatResult, "  \u2022  ", ];
    intl = util.intl;
    BPDKoA = util.t.BPDKoA;
    const obj6 = { helpdeskArticle: null };
    getArticleURL = HelpdeskUtilsDefault.getArticleURL;
    obj6.helpdeskArticle = getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
    items1[2] = intl.format(BPDKoA, obj6);
    obj5.children = items1;
    obj4.children = timestampProducer(hasOwnProperty, obj5);
    const items2 = [React5(Text, obj4), ];
    const obj7 = { style: null };
    divider = divider.divider;
    obj7.style = divider;
    Text = React5(View, obj7);
    items2[1] = Text;
    obj2.children = items2;
    timestampProducer(View, obj2);
  }
};