// === Module 9177: authorizeConnection ===

// Module 9177 (authorizeConnection)
import Constants from "Constants" /* 1085 */;
import LinkingDefault from "Linking" /* 4765 */;
import Constants2 from "Constants" /* 6870 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants2.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(overrideUrl) {
  ({ platformType, location: _location, onClose } = overrideUrl);
  let handleModalClose5 = onClose;
  overrideUrl = overrideUrl.overrideUrl;
  const successRedirect = overrideUrl.successRedirect;
  if (platformType === PlatformTypes.LEAGUE_OF_LEGENDS) {
    platformType = PlatformTypes.RIOT_GAMES;
  }
  if (null == _location) {
    _location = "mobile";
  }
  if (platformType === PlatformTypes.XBOX) {
    overrideUrl(5055).hideActionSheet();
    const obj15 = overrideUrl(5055);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(9178).showModal(items);
    if (null != onClose) {
      function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(584).unsubscribe("MODAL_POP", handleModalClose5);
      }
      handleModalClose5 = handleModalClose;
      const subscription = tmp23(584).subscribe("MODAL_POP", handleModalClose);
      const tmp23Result = tmp23(584);
    }
    const obj16 = overrideUrl(9178);
  } else {
    if (platformType !== PlatformTypes.PLAYSTATION) {
      if (platformType !== PlatformTypes.PLAYSTATION_STAGING) {
        if (platformType === PlatformTypes.CRUNCHYROLL) {
          overrideUrl(5055).hideActionSheet();
          const obj11 = overrideUrl(5055);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(12880).showModal(items1);
          if (null != onClose) {
            const handleModalClose4 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(584).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose4;
            const subscription1 = tmp15(584).subscribe("MODAL_POP", handleModalClose4);
            const tmp15Result = tmp15(584);
          }
          const obj12 = overrideUrl(12880);
        } else if (platformType === PlatformTypes.DOMAIN) {
          overrideUrl(5055).hideActionSheet();
          const obj8 = overrideUrl(5055);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj.locationStack = items2;
          overrideUrl(5941).pushLazy(handleModalClose5(2000)(12891, dependencyMap.paths), obj);
          if (null != onClose) {
            const handleModalClose3 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(584).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose3;
            const subscription2 = tmp10(584).subscribe("MODAL_POP", handleModalClose3);
            const tmp10Result = tmp10(584);
          }
          const obj9 = overrideUrl(5941);
        } else {
          value = overrideUrl(5760).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            tmp28(5055).hideActionSheet();
            const tmp28Result = tmp28(5055);
            const obj2 = { platformType, location: _location, successRedirect };
            tmp28(5941).pushLazy(handleModalClose5(2000)(12893, dependencyMap.paths), obj2);
            if (null != onClose) {
              const handleModalClose2 = function handleModalClose() {
                if (require != null) {
                  tmp();
                }
                overrideUrl(584).unsubscribe("MODAL_POP", handleModalClose5);
              };
              handleModalClose5 = handleModalClose2;
              const subscription3 = tmp28(584).subscribe("MODAL_POP", handleModalClose2);
              const tmp28Result5 = tmp28(584);
            }
            const tmp28Result4 = tmp28(5941);
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                const obj4 = {
                  shouldConfirm: true,
                  href: overrideUrl,
                  onConfirm() {
                                  LinkingDefault.openURL(overrideUrl);
                                }
                };
                handleModalClose5(8474).handleClick(obj4);
                const obj3 = handleModalClose5(8474);
              }
            }
            const obj5 = { location: _location, successRedirect };
            const tmp28Result6 = tmp28(6868);
            tmp28(6868).authorize(platformType, obj5).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(4765).openURL(url);
                const obj = overrideUrl(4765);
              }
            });
            const authorizeResult = tmp28(6868).authorize(platformType, obj5);
          }
          const obj18 = overrideUrl(5760);
        }
      }
    }
    overrideUrl(5055).hideActionSheet();
    const obj13 = overrideUrl(5055);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(12869).showModal(items3, platformType);
    if (null != onClose) {
      handleModalClose5 = function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(584).unsubscribe("MODAL_POP", handleModalClose5);
      };
      const subscription4 = tmp19(584).subscribe("MODAL_POP", handleModalClose5);
      const tmp19Result = tmp19(584);
    }
    const obj14 = overrideUrl(12869);
  }
};