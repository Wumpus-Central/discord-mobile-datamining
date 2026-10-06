// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import intl3 from "../../../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators.tsx";
import OneWayToTwoWayLinkUpsell2 from "../OneWayToTwoWayLinkUpsell.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/14791_AssetRegistry.js";
import react from "../../../../../../../_runtime/00019_react.js";
import Constants from "../../../../../../Constants.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4 } = Constants);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp13;
      let tmp19;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(8);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = HelpdeskUtilsDefault;
        const articleURL = obj2.getArticleURL(constants.XBOX_CONNECTION);
        const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t["2okkZV"]);
        const intl2 = intl3.intl;
        const obj3 = { help_article: articleURL };
        const formatResult = intl2.format(intl3.t.OnERSS, obj3);
        cResult[0] = OneWayToTwoWayLinkUpsell;
        cResult[1] = stringResult;
        cResult[2] = formatResult;
        tmp6 = stringResult;
        tmp7 = formatResult;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      if (cResult[3] !== tmp4.upsellImage) {
        FastImageDefault;
        const tmp17 = <tmp16 style={tmp4.upsellImage} source={AssetRegistryDefault} resizeMode="contain" />;
        cResult[3] = tmp4.upsellImage;
        cResult[4] = tmp17;
        tmp13 = tmp17;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            obj = closure_1_1(closure_1_2[11]);
            items = [];
            items[0] = closure_1_4.RELINK_UPSELL;
            return obj.showModal(items);
          }
        }
        cResult[5] = O;
      } else {
        class O {
          constructor() {
            obj = closure_1_1(closure_1_2[11]);
            items = [];
            items[0] = closure_1_4.RELINK_UPSELL;
            return obj.showModal(items);
          }
        }
      }
      if (cResult[6] !== tmp13) {
        class O {
          constructor() {
            obj = closure_1_1(closure_1_2[11]);
            items = [];
            items[0] = closure_1_4.RELINK_UPSELL;
            return obj.showModal(items);
          }
        }
        const tmp20 = (
          <tmp5
            title={tmp6}
            body={tmp7}
            img={tmp13}
            newIndicatorDismissibleContent={dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT}
            onPress={O}
          />
        );
        cResult[6] = tmp13;
        cResult[7] = tmp20;
        tmp19 = tmp20;
      } else {
        class O {
          constructor() {
            obj = closure_1_1(closure_1_2[11]);
            items = [];
            items[0] = closure_1_4.RELINK_UPSELL;
            return obj.showModal(items);
          }
        }
      }
      return tmp19;
    }
  : () => {
      const tmp = closure_6();
      let obj = HelpdeskUtilsDefault;
      const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
      const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
      const intl = intl3.intl;
      const intl2 = intl3.intl;
      ({ style: tmp.upsellImage, source: AssetRegistryDefault, resizeMode: "contain" });
      FastImageDefault;
      return (
        <OneWayToTwoWayLinkUpsell
          title={intl.string(intl3.t["2okkZV"])}
          body={intl2.format(intl3.t.OnERSS, { help_article: articleURL })}
          img={null}
          newIndicatorDismissibleContent={dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT}
          onPress={function onPress() {
            const items = [constants.RELINK_UPSELL];
            const obj = XboxLinkModalActionCreatorsDefault;
            return obj.showModal(items);
          }}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx",
);

export const XboxTwoWayLinkUpsell = tmp4;
