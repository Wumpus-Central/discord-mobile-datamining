// discord_app/modules/nuf/native/components/SkipHeaderButton.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

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
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    label = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5Wxrcd"]);
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
  return jsx(require("../../../main_tabs_v2/native/shared_components/HeaderShared.tsx") /* GenericHeaderTitle */.HeaderTextButton, {});
};