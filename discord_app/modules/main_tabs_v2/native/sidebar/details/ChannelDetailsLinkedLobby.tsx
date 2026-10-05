// === Module 16912: ChannelDetailsLinkedLobby ===

// Module 16912 (ChannelDetailsLinkedLobby)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import Text_Text from "Text/Text" /* 4886 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6663 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ Fragment: hasOwnProperty, jsxs: metroRequire, jsx: metroImportDefault } = Fragment);
let obj = { container: { alignItems: "center" }, divider: size };
size = { height: 1, width: 48, marginTop: 12, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let containerStyle;
  let items;
  let items1;
  let obj4;
  let obj8;
  const obj = react2;
  const cResult = obj.c(15);
  ({ channel, containerStyle } = arg0);
  const tmp4 = closure_8();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
  useGetOrFetchApplications;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  let tmp8 = null;
  if (null != channel.linkedLobby) {
    if (cResult[0] === containerStyle) {
      let tmp9;
      let tmp10;
      let tmp13;
      if (cResult[1] === tmp4.container) {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== getOrFetchApplication) {
        let formatResult;
        if (null != getOrFetchApplication) {
          const intl2 = intl4.intl;
          const obj2 = { applicationName: getOrFetchApplication.name };
          formatResult = intl2.format(intl4.t.SgxMJs, obj2);
        } else {
          const intl = intl4.intl;
          formatResult = intl.string(intl4.t.yQqVss);
        }
        cResult[3] = getOrFetchApplication;
        cResult[4] = formatResult;
        tmp10 = formatResult;
      } else {
        tmp10 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const format = intl3.format;
        const obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.LINKED_LOBBIES) };
        const BPDKoA = intl4.t.BPDKoA;
        obj4 = HelpdeskUtilsDefault;
        const formatResult1 = format(BPDKoA, obj3);
        cResult[5] = formatResult1;
        tmp13 = formatResult1;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp10) {
        let tmp17;
        let tmp22;
        if (cResult[7] === tmp13) {
          tmp17 = cResult[8];
        }
        if (cResult[9] !== tmp4.divider) {
          const obj5 = { style: tmp4.divider };
          const tmp25 = metroImportDefault(View, obj5);
          cResult[9] = tmp4.divider;
          cResult[10] = tmp25;
          tmp22 = tmp25;
        } else {
          tmp22 = cResult[10];
        }
        if (cResult[11] === tmp9) {
          if (cResult[12] === tmp17) {
            let tmp26;
            if (cResult[13] === tmp22) {
              tmp26 = cResult[14];
            }
            tmp8 = tmp26;
          }
        }
        const obj6 = { style: tmp9, children: items };
        items = [tmp17, tmp22];
        const tmp29 = metroRequire(View, obj6);
        cResult[11] = tmp9;
        cResult[12] = tmp17;
        cResult[13] = tmp22;
        cResult[14] = tmp29;
        tmp26 = tmp29;
      }
      const obj7 = { variant: "text-sm/normal", color: "text-default", children: metroRequire(hasOwnProperty, obj8) };
      obj8 = { children: items1 };
      items1 = [tmp10, "  \u2022  ", tmp13];
      const Text = Text_Text.Text;
      const tmp21 = metroImportDefault(Text, obj7);
      cResult[6] = tmp10;
      cResult[7] = tmp13;
      cResult[8] = tmp21;
      tmp17 = tmp21;
    }
    const items2 = [tmp4.container, containerStyle];
    cResult[0] = containerStyle;
    cResult[1] = tmp4.container;
    cResult[2] = items2;
    tmp9 = items2;
  }
  return tmp8;
}) : ((channel) => {
  let items;
  let items1;
  let items2;
  let obj4;
  let obj6;
  channel = channel.channel;
  const containerStyle = channel.containerStyle;
  const tmp = closure_8();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
  useGetOrFetchApplications;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  let tmp8Result = null;
  if (null != channel.linkedLobby) {
    let formatResult;
    const obj = { style: items, children: items2 };
    items = [tmp.container, containerStyle];
    const Text = Text_Text.Text;
    if (null != getOrFetchApplication) {
      const intl2 = intl4.intl;
      const obj2 = { applicationName: getOrFetchApplication.name };
      formatResult = intl2.format(intl4.t.SgxMJs, obj2);
    } else {
      const intl = intl4.intl;
      formatResult = intl.string(intl4.t.yQqVss);
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: metroRequire(hasOwnProperty, obj4) };
    obj4 = { children: items1 };
    items1 = [formatResult, "  \u2022  ", ];
    const intl3 = intl4.intl;
    const format = intl3.format;
    const obj5 = { helpdeskArticle: obj6.getArticleURL(HelpdeskArticles.LINKED_LOBBIES) };
    const BPDKoA = intl4.t.BPDKoA;
    obj6 = HelpdeskUtilsDefault;
    items1[2] = format(BPDKoA, obj5);
    items2 = [metroImportDefault(Text, obj3), ];
    const obj7 = { style: tmp.divider };
    items2[1] = metroImportDefault(View, obj7);
    tmp8Result = metroRequire(View, obj);
  }
  return tmp8Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default tmp4;