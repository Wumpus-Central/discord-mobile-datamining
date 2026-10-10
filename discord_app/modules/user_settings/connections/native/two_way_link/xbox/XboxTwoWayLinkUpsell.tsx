// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import util from "../../../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators.tsx";
import OneWayToTwoWayLinkUpsell2 from "../OneWayToTwoWayLinkUpsell.tsx";
import _modDef15226 from "../../../../../../../_runtime/metro/15226__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1085);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx",
);

export const XboxTwoWayLinkUpsell = ReactCompilerGating.isReactCompilerEnabled()
  ? function XboxTwoWayLinkUpsell() {
      const cResult = c.c(8);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
        const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
        const intl = util.intl;
        const stringResult = intl.string(util.t["2okkZV"]);
        const intl2 = util.intl;
        const obj3 = { help_article: articleURL };
        const formatResult = intl2.format(util.t.OnERSS, obj3);
        cResult[0] = OneWayToTwoWayLinkUpsell;
        cResult[1] = stringResult;
        cResult[2] = formatResult;
        tmp6 = stringResult;
        tmp7 = formatResult;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      if (cResult[3] !== tmp4.upsellImage) {
        const obj4 = { style: tmp4.upsellImage, source: _modDef15226, resizeMode: "contain" };
        const tmp17 = jsx(FastImageDefault, { style: tmp4.upsellImage, source: _modDef15226, resizeMode: "contain" });
        cResult[3] = tmp4.upsellImage;
        cResult[4] = tmp17;
        let tmp13 = tmp17;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p() {
          const items = [constants.RELINK_UPSELL];
          return XboxLinkModalActionCreatorsDefault.showModal(items);
        };
        cResult[5] = fn;
        let tmp18 = fn;
      } else {
        tmp18 = cResult[5];
      }
      if (cResult[6] !== tmp13) {
        const obj5 = {
          title: tmp6,
          body: tmp7,
          img: tmp13,
          newIndicatorDismissibleContent: dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT,
          onPress: tmp18,
        };
        const tmp21 = (
          <tmp5
            title={tmp6}
            body={tmp7}
            img={tmp13}
            newIndicatorDismissibleContent={dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT}
            onPress={tmp18}
          />
        );
        cResult[6] = tmp13;
        cResult[7] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[7];
      }
      return tmp19;
    }
  : function XboxTwoWayLinkUpsell() {
      const tmp = closure_6();
      const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
      const obj2 = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["2okkZV"]);
      const intl2 = util.intl;
      obj2.body = intl2.format(util.t.OnERSS, { help_article: articleURL });
      const obj3 = { style: tmp.upsellImage, source: null, resizeMode: "contain" };
      obj3.source = _modDef15226;
      obj2.img = jsx(FastImageDefault, { style: tmp.upsellImage, source: null, resizeMode: "contain" });
      obj2.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
      obj2.onPress = function onPress() {
        const items = [constants.RELINK_UPSELL];
        return XboxLinkModalActionCreatorsDefault.showModal(items);
      };
      return jsx(OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell, {
        title: null,
        body: null,
        img: null,
        newIndicatorDismissibleContent: null,
        onPress: null,
      });
    };
