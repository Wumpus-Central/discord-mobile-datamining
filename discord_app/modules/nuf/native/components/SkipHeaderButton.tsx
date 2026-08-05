// discord_app/modules/nuf/native/components/SkipHeaderButton.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { GenericHeaderTitle } from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";

const require = arg1;
createCacheKey = { button: null, insideNavigatorButton: null };
createCacheKey = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingRight: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default function SkipHeaderButton(label) {
  const tmp = createCacheKey();
  label = label.label;
  if (label == null) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    label = intl.string(getSystemLocale /* getSystemLocale */.t["5Wxrcd"]);
  }
  const obj = {};
  const merged = Object.assign(label);
  const items = [tmp.button, ];
  let prop;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  obj.labelStyle = items;
  obj.label = label;
  obj.accessibilityLabel = label;
  return jsx(GenericHeaderTitle /* GenericHeaderTitle */.HeaderTextButton, {});
};