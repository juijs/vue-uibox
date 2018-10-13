export default {
    install: function (Vue, options) {
        const UixTheme = (!options || !options.theme) ? `` : `.${options.theme}`;
        const UixModal = require(`./components/modal${UixTheme}.vue`);
        const UixCombo = require(`./components/combo${UixTheme}.vue`);
        const UixButton = require(`./components/button${UixTheme}.vue`);
        const UixTab = require(`./components/tab${UixTheme}.vue`);
        const UixDatePicker = require(`./components/datepicker${UixTheme}.vue`);
        const UixCalendar = require(`./components/calendar${UixTheme}.vue`);

        Vue.component(UixModal.default.name, UixModal.default);
        Vue.component(UixCombo.default.name, UixCombo.default);
        Vue.component(UixButton.default.name, UixButton.default);
        Vue.component(UixTab.default.name, UixTab.default);
        Vue.component(UixDatePicker.default.name, UixDatePicker.default);
        Vue.component(UixCalendar.default.name, UixCalendar.default);
    }
}