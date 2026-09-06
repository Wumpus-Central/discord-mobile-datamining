// === Module 12763: ForumDisplaySettingsActionSheet ===

// Module 12763 (ForumDisplaySettingsActionSheet)
import tracking_Tracking from "tracking/Tracking" /* 7767 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const ForumChannelStore = fn(12001);
({ useForumChannelStoreApi: metroRequire, useForumChannelStore: closure_7 } = ForumChannelStore);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default function ForumDisplaySettingsActionSheet(channelId) {
  channelId = channelId.channelId;
  let sortOrder;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  let obj = channelId(sortOrder[9]);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp3 = c7(channelId);
  sortOrder = tmp3.sortOrder;
  const layoutType = tmp3.layoutType;
  const tagSetting = tmp3.tagSetting;
  noop = c6();
  [c5, c6] = layoutType(noop.useState(sortOrder), 2);
  const tmp4 = layoutType(noop.useState(sortOrder), 2);
  [c7, c8] = layoutType(noop.useState(layoutType), 2);
  const tmp5 = layoutType(noop.useState(layoutType), 2);
  [c9, c10] = layoutType(noop.useState(tagSetting), 2);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  let obj2 = channelId(sortOrder[10]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if (null != stateFromStores) {
      if (sortOrder !== c5) {
        let obj = { guildId: null, channelId: null, sortOrder: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
        obj.sortOrder = tmp17;
        const result = obj.trackForumSortOrderUpdated(obj);
      }
      if (layoutType !== c7) {
        obj = { guildId: null, channelId: null, forumLayout: null };
        ({ guild_id: obj4.guildId, id: obj4.channelId } = tmp);
        obj.forumLayout = tmp6;
        const result1 = tracking_Tracking.trackForumLayoutUpdated(obj);
      }
      const state = closure_4.getState();
      state.setLayoutType(channelId, c7);
      const state1 = closure_4.getState();
      state1.setSortOrder(channelId, c5);
      const state2 = closure_4.getState();
      state2.setTagSetting(channelId, c9);
    }
  });
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp12 = null != stateFromStores.availableTags;
    if (tmp12) {
      tmp12 = stateFromStores.availableTags.length > 0;
    }
    obj = { scrollable: true, header: null, children: null };
    obj = { title: null, leading: null };
    const intl = tmp(tmp2[5]).intl;
    obj.title = intl.string(tmp(tmp2[5]).t.xyYt8A);
    const obj1 = { onPress: tmp11, label: null };
    const intl2 = tmp(tmp2[5]).intl;
    obj1.label = intl2.string(tmp(tmp2[5]).t.yBZMsQ);
    obj.leading = c8(tmp(tmp2[14]).ActionSheetHeaderPressableText, obj1);
    obj.header = c8(tmp(tmp2[13]).BottomSheetTitleHeader, obj);
    obj2 = { direction: "vertical", spacing: stateFromStores(tmp2[17]).space.PX_16, children: null };
    let obj3 = {
      groupRef: ref,
      hasIcons: false,
      defaultValue: sortOrder,
      onChange(arg0) {
          _undefined(arg0);
        },
      title: null,
      accessibilityLabel: null,
      children: null
    };
    const intl3 = tmp(tmp2[5]).intl;
    obj3.title = intl3.string(tmp(tmp2[5]).t.f8wNDl);
    const intl4 = tmp(tmp2[5]).intl;
    obj3.accessibilityLabel = intl4.string(tmp(tmp2[5]).t.f8wNDl);
    const obj4 = { label: null, value: null };
    const intl5 = tmp(tmp2[5]).intl;
    obj4.label = intl5.string(tmp(tmp2[5]).t.jOPmcI);
    obj4.value = tmp(tmp2[6]).ThreadSortOrder.LATEST_ACTIVITY;
    const items1 = [obj4, ];
    const obj5 = { label: null, value: null };
    const intl6 = tmp(tmp2[5]).intl;
    obj5.label = intl6.string(tmp(tmp2[5]).t.UIltXd);
    obj5.value = tmp(tmp2[6]).ThreadSortOrder.CREATION_DATE;
    items1[1] = obj5;
    obj3.children = items1.map((label) => {
      value = label.value;
      return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
    });
    const items2 = [c8(tmp(tmp2[18]).TableRadioGroup, obj3), , ];
    let tmp13Result = null;
    if (stateFromStores.isForumChannel()) {
      tmp13Result = null;
      if (!stateFromStores.isGameInvitesChannel()) {
        const obj6 = {
          groupRef: ref1,
          hasIcons: false,
          defaultValue: layoutType,
          onChange(arg0) {
                  _undefined2(arg0);
                },
          title: null,
          accessibilityLabel: null,
          children: null
        };
        const intl7 = tmp(tmp2[5]).intl;
        obj6.title = intl7.string(tmp(tmp2[5]).t.mFMDSq);
        const intl8 = tmp(tmp2[5]).intl;
        obj6.accessibilityLabel = intl8.string(tmp(tmp2[5]).t.h850Ss);
        const obj7 = { label: null, value: null };
        const intl9 = tmp(tmp2[5]).intl;
        obj7.label = intl9.string(tmp(tmp2[5]).t["NJFr+g"]);
        obj7.value = tmp(tmp2[7]).ForumLayout.LIST;
        const items3 = [obj7, ];
        const obj8 = { label: null, value: null };
        const intl10 = tmp(tmp2[5]).intl;
        obj8.label = intl10.string(tmp(tmp2[5]).t.wKeggb);
        obj8.value = tmp(tmp2[7]).ForumLayout.GRID;
        items3[1] = obj8;
        obj6.children = items3.map((label) => {
          value = label.value;
          return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
        });
        tmp13Result = tmp13(tmp(tmp2[18]).TableRadioGroup, obj6);
      }
    }
    items2[1] = tmp13Result;
    tmp13Result = null;
    if (tmp12) {
      const obj9 = {
        groupRef: ref2,
        hasIcons: false,
        defaultValue: tagSetting,
        onChange(arg0) {
              _undefined3(arg0);
            },
        title: null,
        accessibilityLabel: null,
        children: null
      };
      const intl11 = tmp(tmp2[5]).intl;
      obj9.title = intl11.string(tmp(tmp2[5]).t.Paxaug);
      const intl12 = tmp(tmp2[5]).intl;
      obj9.accessibilityLabel = intl12.string(tmp(tmp2[5]).t.f8wNDl);
      const obj10 = { label: null, value: null };
      const intl13 = tmp(tmp2[5]).intl;
      obj10.label = intl13.string(tmp(tmp2[5]).t.rQ0ctQ);
      obj10.value = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_SOME;
      const items4 = [obj10, ];
      const obj11 = { label: null, value: null };
      const intl14 = tmp(tmp2[5]).intl;
      obj11.label = intl14.string(tmp(tmp2[5]).t.FCXUu0);
      obj11.value = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_ALL;
      items4[1] = obj11;
      obj9.children = items4.map((label) => {
        value = label.value;
        return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
      });
      tmp13Result = tmp13(tmp(tmp2[18]).TableRadioGroup, obj9);
    }
    const obj12 = { children: null };
    items2[2] = tmp13Result;
    obj2.children = items2;
    obj12.children = c9(tmp(tmp2[16]).Stack, obj2);
    obj.children = c8(tmp(tmp2[15]).BottomSheetScrollView, obj12);
    return c8(tmp(tmp2[12]).ActionSheet, obj);
  }
  const tmp6 = layoutType(noop.useState(tagSetting), 2);
};