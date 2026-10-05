// discord_app/modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useSecureFramesUserVerifiedKeysCount from "../hooks/useSecureFramesUserVerifiedKeysCount.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { width: "100%" } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let style;
      let userId;
      let userKey;
      const obj = react;
      const cResult = obj.c(13);
      ({ style, userId, userKey } = arg0);
      const tmp4 = closure_4();
      if (cResult[0] === userId) {
        let tmp5;
        if (cResult[1] === userKey) {
          tmp5 = cResult[2];
        }
        const tmpResult = useSecureFramesUserVerifiedKeysCount;
        const secureFramesUserVerifiedKeysCount = tmpResult.useSecureFramesUserVerifiedKeysCount(tmp5);
        let tmp7 = null;
        if (0 !== secureFramesUserVerifiedKeysCount) {
          if (cResult[3] === style) {
            let tmp8;
            let tmp9;
            let tmp11;
            if (cResult[4] === tmp4.container) {
              tmp8 = cResult[5];
            }
            if (cResult[6] !== secureFramesUserVerifiedKeysCount) {
              const intl = intl2.intl;
              const obj2 = { count: secureFramesUserVerifiedKeysCount };
              const formatResult = intl.format(intl2.t.uZDkz0, obj2);
              cResult[6] = secureFramesUserVerifiedKeysCount;
              cResult[7] = formatResult;
              tmp9 = formatResult;
            } else {
              tmp9 = cResult[7];
            }
            if (cResult[8] !== tmp9) {
              const HelpMessage = native.HelpMessage;
              const tmp13 = <HelpMessage messageType={native.HelpMessageTypes.INFO}>{tmp9}</HelpMessage>;
              cResult[8] = tmp9;
              cResult[9] = tmp13;
              tmp11 = tmp13;
            } else {
              tmp11 = cResult[9];
            }
            if (cResult[10] === tmp8) {
              let tmp14;
              if (cResult[11] === tmp11) {
                tmp14 = cResult[12];
              }
              tmp7 = tmp14;
            }
            const tmp17 = <View style={tmp8}>{tmp11}</View>;
            cResult[10] = tmp8;
            cResult[11] = tmp11;
            cResult[12] = tmp17;
            tmp14 = tmp17;
          }
          const items = [tmp4.container, style];
          cResult[3] = style;
          cResult[4] = tmp4.container;
          cResult[5] = items;
          tmp8 = items;
        }
        return tmp7;
      }
      const obj5 = { userId, keyToOmit: userKey };
      cResult[0] = userId;
      cResult[1] = userKey;
      cResult[2] = obj5;
      tmp5 = obj5;
    }
  : (arg0) => {
      let intl;
      let obj4;
      let style;
      let userId;
      let userKey;
      ({ style, userId, userKey } = arg0);
      const tmp = closure_4();
      const obj = useSecureFramesUserVerifiedKeysCount;
      const secureFramesUserVerifiedKeysCount = obj.useSecureFramesUserVerifiedKeysCount({
        userId,
        keyToOmit: userKey,
      });
      let tmp5 = null;
      if (0 !== secureFramesUserVerifiedKeysCount) {
        const items = [tmp.container, style];
        ({ messageType: native.HelpMessageTypes.INFO, children: intl.format(intl2.t.uZDkz0, obj4) });
        const HelpMessage = native.HelpMessage;
        intl = intl2.intl;
        tmp5 = <View style={items}>{null}</View>;
        obj4 = { count: secureFramesUserVerifiedKeysCount };
      }
      return tmp5;
    };
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default tmp2;
