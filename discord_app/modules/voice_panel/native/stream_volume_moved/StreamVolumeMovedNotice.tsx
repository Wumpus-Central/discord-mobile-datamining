// === Module 20120: StreamVolumeMovedNotice ===

// Module 20120 (StreamVolumeMovedNotice)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import dismissible_content from "dismissible_content" /* 5139 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6808 */;
import TableRow from "TableRow" /* 7443 */;
import TableRowGroup from "TableRowGroup" /* 7746 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 9560 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
const showStreamVolumeMovedHint = fn(15763).showStreamVolumeMovedHint;
const VoicePanelControlsModes = fn(11983).VoicePanelControlsModes;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedNotice.tsx");

export default function StreamVolumeMovedNotice() {
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ setControlsMode: require, setFocused: importDefault } = context);
  items = [ApplicationStreamingStore, AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  if (null != stateFromStores) {
    const items1 = [dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE];
    let items2 = items1;
  } else {
    items2 = [];
  }
  dependencyMap = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items2, { bypassAutoDismiss: true }), 2)[1];
  if (null != stateFromStores) {
    if (tmp6 === dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE) {
      _slicedToArray = StreamKeyUtils.encodeStreamKey(stateFromStores);
      const obj3 = { title: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t.pEAl4b);
      const obj4 = { label: null, trailing: null, arrow: true, onPress: null };
      const intl2 = util.intl;
      obj4.label = intl2.string(util.t["49qRvZ"]);
      const obj5 = { text: null };
      const intl3 = util.intl;
      obj5.text = intl3.string(util.t.YuNoIm);
      obj4.trailing = jsx(TableRow.TableRow.TrailingText, { text: null });
      obj4.onPress = function handlePress() {
        closure_2(ContentDismissActionType.TAKE_ACTION);
        showStreamVolumeMovedHint(closure_3);
        importDefault(closure_3);
        require({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
      };
      obj3.children = jsx(TableRow.TableRow, { label: null, trailing: null, arrow: true, onPress: null });
      return jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: false, children: null });
    }
  }
  return null;
};