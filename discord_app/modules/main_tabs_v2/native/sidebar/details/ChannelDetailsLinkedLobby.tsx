// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useGetOrFetchApplications from "../../../../applications/useGetOrFetchApplications.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ Fragment: hasOwnProperty, jsxs: metroRequire, jsx: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { alignItems: "center" }, divider: null };
let size = { height: 1, width: 48, marginTop: 12, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj2.divider = size;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelDetailsLinkedLobby(arg0) {
      const cResult = c.c(15);
      ({ channel, containerStyle } = arg0);
      const tmp4 = closure_8();
      const linkedLobby = channel.linkedLobby;
      let application_id;
      if (linkedLobby != null) {
        application_id = linkedLobby.application_id;
      }
      const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(application_id);
      if (null == channel.linkedLobby) {
        return null;
      } else {
        if (cResult[0] === containerStyle) {
          if (cResult[1] === tmp4.container) {
            let tmp7 = cResult[2];
          }
          if (cResult[3] !== getOrFetchApplication) {
            if (null != getOrFetchApplication) {
              const intl2 = util.intl;
              const obj3 = { applicationName: getOrFetchApplication.name };
              let formatResult = intl2.format(util.t.SgxMJs, obj3);
            } else {
              const intl = util.intl;
              formatResult = intl.string(util.t.yQqVss);
            }
            cResult[3] = getOrFetchApplication;
            cResult[4] = formatResult;
          } else {
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const obj4 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.LINKED_LOBBIES) };
              const formatResult1 = intl3.format(util.t.BPDKoA, obj4);
              cResult[5] = formatResult1;
              let tmp12 = formatResult1;
            } else {
              tmp12 = cResult[5];
            }
            if (cResult[6] === cResult[4]) {
              if (cResult[7] === tmp12) {
                let tmp16 = cResult[8];
              }
              if (cResult[9] !== tmp4.divider) {
                const obj6 = { style: tmp4.divider };
                const tmp24 = React5(View, obj6);
                cResult[9] = tmp4.divider;
                cResult[10] = tmp24;
                let tmp21 = tmp24;
              } else {
                tmp21 = cResult[10];
              }
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp16) {
                }
              }
              const obj7 = { style: tmp7, children: null };
              const items = [tmp16, tmp21];
              obj7.children = items;
              const tmp28 = timestampProducer(View, obj7);
              cResult[11] = tmp7;
              cResult[12] = tmp16;
              cResult[13] = tmp21;
              cResult[14] = tmp28;
            }
            const obj8 = { variant: "text-sm/normal", color: "text-default", children: null };
            const obj9 = { children: null };
            const items1 = [cResult[4], "  \u2022  ", tmp12];
            obj9.children = items1;
            obj8.children = timestampProducer(hasOwnProperty, obj9);
            const tmp20 = React5(Text_Text.Text, obj8);
            cResult[6] = cResult[4];
            cResult[7] = tmp12;
            cResult[8] = tmp20;
            tmp16 = tmp20;
          }
        }
        const items2 = [tmp4.container, containerStyle];
        cResult[0] = containerStyle;
        cResult[1] = tmp4.container;
        cResult[2] = items2;
        tmp7 = items2;
      }
    }
  : function ChannelDetailsLinkedLobby(channel) {
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
        const items1 = [formatResult, "  \u2022  "];
        intl = util.intl;
        BPDKoA = util.t.BPDKoA;
        const obj6 = { helpdeskArticle: null };
        getArticleURL = HelpdeskUtilsDefault.getArticleURL;
        obj6.helpdeskArticle = getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
        items1[2] = intl.format(BPDKoA, obj6);
        obj5.children = items1;
        obj4.children = timestampProducer(hasOwnProperty, obj5);
        const items2 = [React5(Text, obj4)];
        const obj7 = { style: null };
        divider = divider.divider;
        obj7.style = divider;
        Text = React5(View, obj7);
        items2[1] = Text;
        obj2.children = items2;
        timestampProducer(View, obj2);
      }
    };
