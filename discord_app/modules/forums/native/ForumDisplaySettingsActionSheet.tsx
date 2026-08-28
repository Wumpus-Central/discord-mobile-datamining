// === Module 12234: ForumDisplaySettingsActionSheet ===

// Module 12234 (ForumDisplaySettingsActionSheet)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import set from "set" /* 11513 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ useForumChannelStoreApi: closure_6, useForumChannelStore: error } = set);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let result = set.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default function ForumDisplaySettingsActionSheet(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  let sortOrder;
  let layoutType;
  let React;
  c5 = undefined;
  let callback;
  let callback2;
  let callback3;
  c9 = undefined;
  c10 = undefined;
  let ref;
  let ref1;
  let ref2;
  let obj = channelId(sortOrder[9]);
  const items = [c5];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.getChannel(channelId));
  const tmp3 = callback2(channelId);
  sortOrder = tmp3.sortOrder;
  layoutType = tmp3.layoutType;
  const tagSetting = tmp3.tagSetting;
  React = callback();
  [c5, c6] = layoutType(React.useState(sortOrder), 2);
  const tmp4 = layoutType(React.useState(sortOrder), 2);
  [c7, c8] = layoutType(React.useState(layoutType), 2);
  const tmp5 = layoutType(React.useState(layoutType), 2);
  [c9, c10] = layoutType(React.useState(tagSetting), 2);
  ref = React.useRef(null);
  ref1 = React.useRef(null);
  ref2 = React.useRef(null);
  let obj2 = channelId(sortOrder[10]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if (null != stateFromStores) {
      if (sortOrder !== c5) {
        let obj = channelId(sortOrder[11]);
        obj = { guildId: null, channelId: null, sortOrder: null };
        ({ guild_id: obj2[0], id: obj2[1] } = tmp);
        obj[2] = tmp17;
        const result = obj.trackForumSortOrderUpdated(obj);
      }
      if (layoutType !== c7) {
        obj = { guildId: null, channelId: null, forumLayout: null };
        ({ guild_id: obj4[0], id: obj4[1] } = tmp);
        obj[2] = tmp6;
        const result1 = channelId(sortOrder[11]).trackForumLayoutUpdated(obj);
        const obj3 = channelId(sortOrder[11]);
      }
      const state = store.getState();
      state.setLayoutType(channelId, c7);
      const state1 = store.getState();
      state1.setSortOrder(channelId, c5);
      const state2 = store.getState();
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
    obj[0] = intl.string(tmp(tmp2[5]).t.xyYt8A);
    obj1 = { onPress: null, label: null };
    obj1[0] = tmp11;
    const intl2 = tmp(tmp2[5]).intl;
    obj1[1] = intl2.string(tmp(tmp2[5]).t.yBZMsQ);
    obj[1] = callback3(tmp(tmp2[14]).ActionSheetHeaderPressableText, obj1);
    obj[1] = callback3(tmp(tmp2[13]).BottomSheetTitleHeader, obj);
    obj2 = { direction: "vertical", spacing: null, children: null };
    obj2[1] = stateFromStores(tmp2[17]).space.PX_16;
    let obj3 = { groupRef: null, hasIcons: false, defaultValue: null, onChange: null, title: null, accessibilityLabel: null, children: null };
    obj3[0] = ref;
    obj3[2] = sortOrder;
    obj3[3] = function onChange(arg0) {
      _undefined2(arg0);
    };
    const intl3 = tmp(tmp2[5]).intl;
    obj3[4] = intl3.string(tmp(tmp2[5]).t.f8wNDl);
    const intl4 = tmp(tmp2[5]).intl;
    obj3[5] = intl4.string(tmp(tmp2[5]).t.f8wNDl);
    const obj4 = { label: null, value: null };
    const intl5 = tmp(tmp2[5]).intl;
    obj4[0] = intl5.string(tmp(tmp2[5]).t.jOPmcI);
    obj4[1] = tmp(tmp2[6]).ThreadSortOrder.LATEST_ACTIVITY;
    const items1 = [obj4, ];
    const obj5 = { label: null, value: null };
    const intl6 = tmp(tmp2[5]).intl;
    obj5[0] = intl6.string(tmp(tmp2[5]).t.UIltXd);
    obj5[1] = tmp(tmp2[6]).ThreadSortOrder.CREATION_DATE;
    items1[1] = obj5;
    obj3[6] = items1.map((label) => {
      const value = label.value;
      return _undefined3(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
    });
    const items2 = [callback3(tmp(tmp2[18]).TableRadioGroup, obj3), , ];
    let tmp13Result = null;
    if (stateFromStores.isForumChannel()) {
      tmp13Result = null;
      if (!stateFromStores.isGameInvitesChannel()) {
        const obj6 = { groupRef: null, hasIcons: false, defaultValue: null, onChange: null, title: null, accessibilityLabel: null, children: null };
        obj6[0] = ref1;
        obj6[2] = layoutType;
        obj6[3] = function onChange(arg0) {
          _undefined3(arg0);
        };
        const intl7 = tmp(tmp2[5]).intl;
        obj6[4] = intl7.string(tmp(tmp2[5]).t.mFMDSq);
        const intl8 = tmp(tmp2[5]).intl;
        obj6[5] = intl8.string(tmp(tmp2[5]).t.h850Ss);
        const obj7 = { label: null, value: null };
        const intl9 = tmp(tmp2[5]).intl;
        obj7[0] = intl9.string(tmp(tmp2[5]).t["NJFr+g"]);
        obj7[1] = tmp(tmp2[7]).ForumLayout.LIST;
        const items3 = [obj7, ];
        const obj8 = { label: null, value: null };
        const intl10 = tmp(tmp2[5]).intl;
        obj8[0] = intl10.string(tmp(tmp2[5]).t.wKeggb);
        obj8[1] = tmp(tmp2[7]).ForumLayout.GRID;
        items3[1] = obj8;
        obj6[6] = items3.map((label) => {
          const value = label.value;
          return _undefined3(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
        });
        tmp13Result = tmp13(tmp(tmp2[18]).TableRadioGroup, obj6);
      }
    }
    items2[1] = tmp13Result;
    tmp13Result = null;
    if (tmp12) {
      const obj9 = { groupRef: null, hasIcons: false, defaultValue: null, onChange: null, title: null, accessibilityLabel: null, children: null };
      obj9[0] = ref2;
      obj9[2] = tagSetting;
      obj9[3] = function onChange(arg0) {
        _undefined4(arg0);
      };
      const intl11 = tmp(tmp2[5]).intl;
      obj9[4] = intl11.string(tmp(tmp2[5]).t.Paxaug);
      const intl12 = tmp(tmp2[5]).intl;
      obj9[5] = intl12.string(tmp(tmp2[5]).t.f8wNDl);
      const obj10 = { label: null, value: null };
      const intl13 = tmp(tmp2[5]).intl;
      obj10[0] = intl13.string(tmp(tmp2[5]).t.rQ0ctQ);
      obj10[1] = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_SOME;
      const items4 = [obj10, ];
      const obj11 = { label: null, value: null };
      const intl14 = tmp(tmp2[5]).intl;
      obj11[0] = intl14.string(tmp(tmp2[5]).t.FCXUu0);
      obj11[1] = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_ALL;
      items4[1] = obj11;
      obj9[6] = items4.map((label) => {
        const value = label.value;
        return _undefined3(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
      });
      tmp13Result = tmp13(tmp(tmp2[18]).TableRadioGroup, obj9);
    }
    const obj12 = { children: null };
    items2[2] = tmp13Result;
    obj2[2] = items2;
    obj12[0] = c9(tmp(tmp2[16]).Stack, obj2);
    obj[2] = callback3(tmp(tmp2[15]).BottomSheetScrollView, obj12);
    return callback3(tmp(tmp2[12]).ActionSheet, obj);
  }
  const tmp6 = layoutType(React.useState(tagSetting), 2);
};