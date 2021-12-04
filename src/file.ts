console.log(`In environment: ${GLOBAL_SETTINGS.ENV}`);

if (GLOBAL_SETTINGS.DEBUG) {
  console.debug('Debug enabled');
}

if (OTHER_GLOBAL_TYPE) {
  console.debug('Other global enabled');
}
