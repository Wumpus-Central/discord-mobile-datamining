// discord_app/modules/billing/native/UnsupportedFeatureModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let onDismiss;
      let title;
      let tmp4;
      let tmp5;
      const obj = onDismiss(576);
      const cResult = obj.c(7);
      ({ title, onDismiss } = arg0);
      if (cResult[0] !== onDismiss) {
        const fn = function o() {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
          if (onDismiss != null) {
            onDismiss();
          }
        };
        cResult[0] = onDismiss;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const tmpResult = onDismiss(6017);
        const headerCloseButton = tmpResult.getHeaderCloseButton(tmp4);
        cResult[2] = tmp4;
        cResult[3] = headerCloseButton;
        tmp5 = headerCloseButton;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        let tmp7;
        if (cResult[5] === title) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
      const obj3 = {
        Unsupported: {
          title,
          headerLeft: tmp5,
          render() {
            let intl;
            ({
              variant: "text-lg/normal",
              color: "text-default",
              children: intl.string(onDismiss(dependencyMap[9]).t.I22zuX),
            });
            const Text = onDismiss(dependencyMap[8]).Text;
            intl = onDismiss(dependencyMap[9]).intl;
            return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
          },
        },
      };
      const tmp8 = jsx(onDismiss(6503).Navigator, { initialRouteName: "Unsupported", screens: obj3 });
      cResult[4] = tmp5;
      cResult[5] = title;
      cResult[6] = tmp8;
      tmp7 = tmp8;
    }
  : (onDismiss) => {
      let obj3;
      let obj4;
      onDismiss = onDismiss.onDismiss;
      const obj2 = { Unsupported: obj3 };
      obj3 = {
        title: onDismiss.title,
        headerLeft: obj4.getHeaderCloseButton(() => {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
          if (onDismiss != null) {
            onDismiss();
          }
        }),
        render() {
          let intl;
          ({
            variant: "text-lg/normal",
            color: "text-default",
            children: intl.string(onDismiss(dependencyMap[9]).t.I22zuX),
          });
          const Text = onDismiss(dependencyMap[8]).Text;
          intl = onDismiss(dependencyMap[9]).intl;
          return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
        },
      };
      const Navigator = onDismiss(6503).Navigator;
      obj4 = onDismiss(6017);
      return <Navigator initialRouteName="Unsupported" screens={obj2} />;
    };
const result = size.fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default tmp3;
