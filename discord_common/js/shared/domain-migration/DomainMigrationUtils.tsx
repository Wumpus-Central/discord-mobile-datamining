// === Module 5264: DomainMigrationEventType ===

// Module 5264 (DomainMigrationEventType)
let obj = { MIGRATION_SOURCE_DOMAIN: 0, [0]: "MIGRATION_SOURCE_DOMAIN", MIGRATION_DESTINATION_DOMAIN: 1, [1]: "MIGRATION_DESTINATION_DOMAIN" };
const result = require("set").fileFinishedImporting("../discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx");

export const DomainMigrationEventType = { SKIP_MIGRATION: 0, [0]: "SKIP_MIGRATION", SEND_DATA: 1, [1]: "SEND_DATA", DATA_MIGRATED: 2, [2]: "DATA_MIGRATED", DATA_MIGRATED_CONFIRMED: 3, [3]: "DATA_MIGRATED_CONFIRMED" };
export const DomainMigrationMessageFrom = obj;
export const DOMAIN_MIGRATION_SUCCESS_KEY = "domainMigrationSuccess";
export const DOMAIN_MIGRATION_FAILED_KEY = "domainMigrationFailed";
export const sendPostMessage = function sendPostMessage(domainMigrationEvent, postMessage) {
  if (arg2 === obj.MIGRATION_SOURCE_DOMAIN) {
    const _window2 = window;
    let MIGRATION_SOURCE_ORIGIN = window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN;
  } else {
    const _window = window;
    MIGRATION_SOURCE_ORIGIN = window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
  }
  obj = { domainMigrationEvent };
  postMessage.postMessage(obj, MIGRATION_SOURCE_ORIGIN);
};
export const extractMessage = function extractMessage(origin) {
  if (arg1 === obj.MIGRATION_SOURCE_DOMAIN) {
    const _window2 = window;
    let MIGRATION_SOURCE_ORIGIN = window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN;
  } else {
    const _window = window;
    MIGRATION_SOURCE_ORIGIN = window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
  }
  let tmp3 = origin.origin === MIGRATION_SOURCE_ORIGIN;
  if (tmp3) {
    tmp3 = null != origin.data.domainMigrationEvent;
  }
  let tmp5 = null;
  if (tmp3) {
    const data = origin.data;
    let domainMigrationEvent;
    if (data != null) {
      domainMigrationEvent = data.domainMigrationEvent;
    }
    tmp5 = domainMigrationEvent;
  }
  return tmp5;
};