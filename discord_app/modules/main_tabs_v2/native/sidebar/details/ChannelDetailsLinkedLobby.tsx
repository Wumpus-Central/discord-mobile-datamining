// === Module 16731: ChannelDetailsLinkedLobby ===

// Module 16731 (ChannelDetailsLinkedLobby)
import nativeDefault from "native" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7168 */;
import noop from "module_19" /* 19 */;

const util = BPDKoA(1114);
const Text_Text = BPDKoA(4556);
require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ Fragment: hasOwnProperty, jsxs: metroRequire, jsx: closure_7 } = jsxProd);
fn(4560);
const createStyles = { container: { alignItems: "center" }, divider: null };
let size = { height: 1, width: 48, marginTop: 12, backgroundColor: nativeDefault.colors.BORDER_STRONG };
createStyles.divider = size;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default function ChannelDetailsLinkedLobby(channel) {
  channel = channel.channel;
  let divider = closure_8();
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
    obj.style = items;
    let Text = Text_Text.Text;
    if (null != intl) {
      const intl3 = util.intl;
      obj = { applicationName: intl.name };
      let formatResult = intl3.format(util.t.SgxMJs, obj);
    } else {
      const intl2 = util.intl;
      formatResult = intl2.string(util.t.yQqVss);
    }
    const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
    const obj2 = { children: null };
    const items1 = [formatResult, "  \u2022  ", ];
    intl = util.intl;
    BPDKoA = util.t.BPDKoA;
    const obj3 = { helpdeskArticle: null };
    getArticleURL = HelpdeskUtilsDefault.getArticleURL;
    obj3.helpdeskArticle = getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
    items1[2] = intl.format(BPDKoA, obj3);
    obj2.children = items1;
    obj1.children = timestampProducer(hasOwnProperty, obj2);
    const items2 = [React5(Text, obj1), ];
    const obj4 = { style: null };
    divider = divider.divider;
    obj4.style = divider;
    Text = React5(View, obj4);
    items2[1] = Text;
    obj.children = items2;
    timestampProducer(View, obj);
  }
};