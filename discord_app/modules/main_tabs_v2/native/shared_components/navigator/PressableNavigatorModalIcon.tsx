// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../../intl/index.native.tsx";
import HeaderShared from "../HeaderShared.tsx";
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx",
);

export default function PressableNavigatorModalIcon(onPress) {
  let stringResult;
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  PressableNavigatorButtonWrapperDefault;
  const HeaderIconButton = HeaderShared.HeaderIconButton;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if ("back" === str) {
    stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  return (
    <tmp4 isModal>
      <HeaderIconButton
        source={importDefault("back" === str ? 7501 : 7506)}
        onPress={goBack}
        accessibilityLabel={stringResult}
      />
    </tmp4>
  );
}
