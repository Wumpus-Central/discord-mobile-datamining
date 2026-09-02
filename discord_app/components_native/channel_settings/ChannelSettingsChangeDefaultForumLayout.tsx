// === Module 16671: ChannelSettingsChangeDefaultForumLayout ===

// Module 16671 (ChannelSettingsChangeDefaultForumLayout)
import ThemesDefault from "Themes" /* 709 */;
import preloadDefault from "preload" /* 5501 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1386 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
class ChannelSettingsChangeDefaultForumLayout {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    tmp = closure_9();
    tmp2 = closure_3(closure_4.useState(channel.defaultForumLayout), 2);
    [tmp3, closure_1] = tmp2;
    items = [];
    items[0] = channel.id;
    tmp5 = jsxs;
    obj = { style: tmp.container, children: null };
    tmp7 = channel;
    tmp8 = closure_2;
    callback = closure_4.useCallback((defaultForumLayout) => {
      _undefined(defaultForumLayout);
      let obj = _undefined(closure_1_2[7]);
      obj = { defaultForumLayout };
      obj.updateChannel(obj);
      obj = { defaultForumLayout };
      _undefined(closure_1_2[7]).saveChannel(channel.id, obj);
    }, items);
    tmp6 = View;
    obj = { title: null, defaultValue: null, onChange: null, hasIcons: true, children: null };
    intl = require("getSystemLocale").intl;
    obj[0] = intl.string(require("getSystemLocale").t.mFMDSq);
    LIST = tmp3;
    if (tmp3 == null) {
      LIST = require("set").ForumLayout.LIST;
    }
    obj[1] = LIST;
    obj[2] = callback;
    tmp9 = jsx;
    obj1 = { icon: jsx(require("GridSquareIcon").GridSquareIcon, {}), label: null, value: null };
    intl2 = require("getSystemLocale").intl;
    obj1[1] = intl2.string(require("getSystemLocale").t["U+rQfW"]);
    obj1[2] = require("set").ForumLayout.GRID;
    items1 = [, ];
    items1[0] = jsx(require("TableRadioRow").TableRadioRow, obj1);
    obj2 = { icon: jsx(require("ListViewIcon").ListViewIcon, {}), label: null, value: null };
    intl3 = require("getSystemLocale").intl;
    obj2[1] = intl3.string(require("getSystemLocale").t.tuHPRX);
    obj2[2] = require("set").ForumLayout.LIST;
    items1[1] = jsx(require("TableRadioRow").TableRadioRow, obj2);
    obj[4] = items1;
    items2 = [, , , ];
    items2[0] = tmp5(require("context").TableRadioGroup, obj);
    obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: null };
    intl4 = require("getSystemLocale").intl;
    obj3[3] = intl4.string(require("getSystemLocale").t.MbX5Hu);
    items2[1] = jsx(require("Text").Text, obj3);
    obj4 = { title: null };
    intl5 = require("getSystemLocale").intl;
    obj4[0] = intl5.string(require("getSystemLocale").t.e4oMl4);
    items2[2] = jsx(require("TableRowGroupTitle").TableRowGroupTitle, obj4);
    tmp10 = closure_1;
    obj5 = { style: tmp.thumbnailImagePortrait, source: null };
    tmp11 = require("preload");
    if (tmp3 === require("set").ForumLayout.GRID) {
      tmp10Result = require("registerAsset");
    } else {
      tmp10Result = require("registerAsset");
    }
    obj5[1] = tmp10Result;
    items2[3] = tmp9(tmp11, obj5);
    obj[1] = items2;
    return tmp5(tmp6, obj);
  }
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, description: null, thumbnailImagePortrait: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[2] = { alignSelf: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx");

export default function ConnectedChannelSettingsChangeDefaultForumLayout(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(586);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: null };
    obj[0] = stateFromStores;
    tmp2 = callback2(ChannelSettingsChangeDefaultForumLayout, obj);
  }
  return tmp2;
};
export { ChannelSettingsChangeDefaultForumLayout };