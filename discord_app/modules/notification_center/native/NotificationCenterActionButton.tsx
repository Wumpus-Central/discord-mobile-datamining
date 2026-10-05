// discord_app/modules/notification_center/native/NotificationCenterActionButton.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../intl/index.native.tsx";
import IconButton2 from "../../../design/components/Button/native/IconButton.native.tsx";
import AssetRegistryDefault from "../../../../_runtime/07578_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  let paths;
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return (
    <IconButton
      variant="tertiary"
      size="sm"
      icon={AssetRegistryDefault}
      onPress={function onPress() {
        const obj = require("ActionSheetActionCreators");
        return obj.openLazy(require("asyncRequire")(paths[5], paths.paths), "NotificationCenterActionSheet");
      }}
      accessibilityLabel={intl.string(intl2.t["UKOtz+"])}
      maxFontSizeMultiplier={2}
    />
  );
}
