// === Module 8528: authorizeConnection ===

// Module 8528 (authorizeConnection)
import Constants from "Constants" /* 1074 */;
import LinkingDefault from "Linking" /* 4525 */;
import Constants2 from "Constants" /* 5720 */;
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
    overrideUrl(4800).hideActionSheet();
    const obj15 = overrideUrl(4800);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(8529).showModal(items);
    if (null != onClose) {
      function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
      }
      handleModalClose5 = handleModalClose;
      const subscription = tmp23(573).subscribe("MODAL_POP", handleModalClose);
      const tmp23Result = tmp23(573);
    }
    const obj16 = overrideUrl(8529);
  } else {
    if (platformType !== PlatformTypes.PLAYSTATION) {
      if (platformType !== PlatformTypes.PLAYSTATION_STAGING) {
        if (platformType === PlatformTypes.CRUNCHYROLL) {
          overrideUrl(4800).hideActionSheet();
          const obj11 = overrideUrl(4800);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(8571).showModal(items1);
          if (null != onClose) {
            const handleModalClose4 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose4;
            const subscription1 = tmp15(573).subscribe("MODAL_POP", handleModalClose4);
            const tmp15Result = tmp15(573);
          }
          const obj12 = overrideUrl(8571);
        } else if (platformType === PlatformTypes.DOMAIN) {
          overrideUrl(4800).hideActionSheet();
          const obj8 = overrideUrl(4800);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj.locationStack = items2;
          overrideUrl(5039).pushLazy(handleModalClose5(1981)(8582, dependencyMap.paths), obj);
          if (null != onClose) {
            const handleModalClose3 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose3;
            const subscription2 = tmp10(573).subscribe("MODAL_POP", handleModalClose3);
            const tmp10Result = tmp10(573);
          }
          const obj9 = overrideUrl(5039);
        } else {
          value = overrideUrl(5595).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            tmp28(4800).hideActionSheet();
            const tmp28Result = tmp28(4800);
            const obj2 = { platformType, location: _location, successRedirect };
            tmp28(5039).pushLazy(handleModalClose5(1981)(8584, dependencyMap.paths), obj2);
            if (null != onClose) {
              const handleModalClose2 = function handleModalClose() {
                if (require != null) {
                  tmp();
                }
                overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
              };
              handleModalClose5 = handleModalClose2;
              const subscription3 = tmp28(573).subscribe("MODAL_POP", handleModalClose2);
              const tmp28Result5 = tmp28(573);
            }
            const tmp28Result4 = tmp28(5039);
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
                handleModalClose5(7818).handleClick(obj4);
                const obj3 = handleModalClose5(7818);
              }
            }
            const obj5 = { location: _location, successRedirect };
            const tmp28Result6 = tmp28(5718);
            tmp28(5718).authorize(platformType, obj5).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(4525).openURL(url);
                const obj = overrideUrl(4525);
              }
            });
            const authorizeResult = tmp28(5718).authorize(platformType, obj5);
          }
          const obj18 = overrideUrl(5595);
        }
      }
    }
    overrideUrl(4800).hideActionSheet();
    const obj13 = overrideUrl(4800);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(8560).showModal(items3, platformType);
    if (null != onClose) {
      handleModalClose5 = function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
      };
      const subscription4 = tmp19(573).subscribe("MODAL_POP", handleModalClose5);
      const tmp19Result = tmp19(573);
    }
    const obj14 = overrideUrl(8560);
  }
};