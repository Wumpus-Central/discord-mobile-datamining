// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import Constants from "../../../../../Constants.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AlertDefault from "../../../../../components_native/common/Alert.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/06586_AssetRegistry.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let onClose;

let hasOwnProperty;
let metroRequire;
const Image = react_native.Image;
const DownloadLinks = Constants.DownloadLinks;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 },
  header: { marginTop: 24, textAlign: "center" },
  text: { marginVertical: 8, lineHeight: 18, textAlign: "center" },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let items;
      let tmp10;
      let tmp15;
      let tmp17;
      let tmp20;
      let tmp22;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(16);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult = intl.string(intl5.t.b8siyY);
        const intl2 = intl5.intl;
        const stringResult1 = intl2.string(intl5.t["ETE/oC"]);
        const fn = function u() {
          const obj = LinkingDefault;
          return obj.openURL(constants.IOS);
        };
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        cResult[2] = fn;
        tmp5 = stringResult;
        tmp6 = stringResult1;
        tmp7 = fn;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      onClose = onClose.onClose;
      if (cResult[3] !== tmp4.headerImage) {
        const obj2 = { source: AssetRegistryDefault, style: tmp4.headerImage };
        const tmp14 = hasOwnProperty(Image, obj2);
        cResult[3] = tmp4.headerImage;
        cResult[4] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[4];
      }
      const header = tmp4.header;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl5.intl;
        const stringResult2 = intl3.string(intl5.t.kkjNHU);
        cResult[5] = stringResult2;
        tmp15 = stringResult2;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== tmp4.header) {
        const obj3 = {
          style: header,
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp15,
        };
        const tmp19 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[6] = tmp4.header;
        cResult[7] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[7];
      }
      const text = tmp4.text;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = intl5.intl;
        const stringResult3 = intl4.string(intl5.t.gnkqzQ);
        cResult[8] = stringResult3;
        tmp20 = stringResult3;
      } else {
        tmp20 = cResult[8];
      }
      if (cResult[9] !== tmp4.text) {
        const obj4 = { style: text, variant: "text-sm/medium", color: "text-default", children: tmp20 };
        const tmp24 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[9] = tmp4.text;
        cResult[10] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[10];
      }
      if (cResult[11] === onClose) {
        if (cResult[12] === tmp22) {
          if (cResult[13] === tmp10) {
            let tmp25;
            if (cResult[14] === tmp17) {
              tmp25 = cResult[15];
            }
            return tmp25;
          }
        }
      }
      const obj5 = { confirmText: tmp5, cancelText: tmp6, onConfirm: tmp7, onCancel: onClose, children: items };
      const tmp26 = AlertDefault;
      const merged = Object.assign(onClose);
      items = [tmp10, tmp17, tmp22];
      const tmp28 = metroRequire(tmp26, obj5);
      cResult[11] = onClose;
      cResult[12] = tmp22;
      cResult[13] = tmp10;
      cResult[14] = tmp17;
      cResult[15] = tmp28;
      tmp25 = tmp28;
    }
  : (onClose) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      const tmp = closure_7();
      let obj = {
        confirmText: intl.string(intl5.t.b8siyY),
        cancelText: intl2.string(intl5.t["ETE/oC"]),
        onConfirm() {
          const obj = LinkingDefault;
          return obj.openURL(constants.IOS);
        },
        onCancel: onClose.onClose,
        children: items,
      };
      const tmp2 = AlertDefault;
      const merged = Object.assign(onClose);
      intl = intl5.intl;
      intl2 = intl5.intl;
      items = [, ,];
      const obj2 = { source: AssetRegistryDefault, style: tmp.headerImage };
      items[0] = hasOwnProperty(Image, obj2);
      const obj3 = {
        style: tmp.header,
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: intl3.string(intl5.t.kkjNHU),
      };
      const Text = Text_Text.Text;
      intl3 = intl5.intl;
      items[1] = hasOwnProperty(Text, obj3);
      const obj4 = {
        style: tmp.text,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl4.string(intl5.t.gnkqzQ),
      };
      const Text2 = Text_Text.Text;
      intl4 = intl5.intl;
      items[2] = hasOwnProperty(Text2, obj4);
      return metroRequire(tmp2, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx",
);

export default tmp4;
