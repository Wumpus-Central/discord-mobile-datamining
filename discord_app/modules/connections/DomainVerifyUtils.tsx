// === Module 9809: EXAMPLE_DOMAIN ===

// Module 9809 (EXAMPLE_DOMAIN)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/connections/DomainVerifyUtils.tsx");

export const EXAMPLE_DOMAIN = "example.com";
export const getDnsName = function getDnsName(domain) {
  return "_discord." + domain;
};
export const getHttpName = function getHttpName(domain) {
  return "https://" + domain + "/.well-known/discord";
};