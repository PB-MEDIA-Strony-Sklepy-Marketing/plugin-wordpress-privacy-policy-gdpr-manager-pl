/**
 * Konfiguracja Cookie Consent
 * @package PBMedia\PrivacyPolicyGDPRManager
 * 
 * FIX #2: Poprawiono konstrukcję linku - tekst "Więcej informacji" 
 * musi być wewnątrz tagu <a>, nie po nim
 */

// Import core library - poprawiona ścieżka względem plugin_dir_url
import './compliance-core.js';

/**
 * Konfiguracja CookieConsent
 * @type {Object}
 */
const config = {
    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {
            enabled: false
        }
    },
    language: {
        default: 'pl',
        autoDetect: 'browser',
        translations: {
            pl: {
                consentModal: {
                    title: 'Polityka Prywatności & RODO',
                    // FIX #2: Template literal z poprawną interpolacją - link text WEWNĄTRZ <a>
                    description: `W związku z tym, iż 25 maja 2018 roku zaczęły obowiązywać nowe przepisy o ochronie danych osobowych, w tym Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 w sprawie ochrony danych osobowych osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE oraz Ustawa z dnia 10 maja 2018 roku o ochronie danych osobowych, utworzyliśmy klauzulę informacyjną w zakresie ochrony danych osobowych. Z treści naszej klauzuli dowiedzą się Państwo w jakim zakresie, celu oraz formie przetwarzamy Państwa dane osobowe jako administrator danych. <a href="${window.ppgmConfig?.privacyUrl || '#'}">Więcej informacji</a>`,
                    acceptAllBtn: 'Akceptuj wszystko',
                    acceptNecessaryBtn: 'Odrzuć wszystko',
                    showPreferencesBtn: 'Zarządzaj preferencjami'
                },
                preferencesModal: {
                    title: 'Zarządzaj preferencjami cookie',
                    acceptAllBtn: 'Akceptuj wszystko',
                    acceptNecessaryBtn: 'Odrzuć wszystko',
                    savePreferencesBtn: 'Zaakceptuj wybór',
                    closeIconLabel: 'Zamknij',
                    sections: [
                        {
                            title: 'Wybierz pliki cookie',
                            description: 'Używamy plików cookie, aby pomóc użytkownikom w sprawnej nawigacji i wykonywaniu określonych funkcji. Szczegółowe informacje na temat wszystkich plików cookie odpowiadających poszczególnym kategoriom zgody znajdują się poniżej. Pliki cookie sklasyfikowane jako „niezbędne” są przechowywane w przeglądarce użytkownika, ponieważ są niezbędne do włączenia podstawowych funkcji witryny. Korzystamy również z plików cookie innych firm, które pomagają nam analizować sposób korzystania ze strony przez użytkowników, a także przechowywać preferencje użytkownika oraz dostarczać mu istotnych dla niego treści i reklam. Tego typu pliki cookie będą przechowywane w przeglądarce tylko za uprzednią zgodą użytkownika. Można włączyć lub wyłączyć niektóre lub wszystkie te pliki cookie, ale wyłączenie niektórych z nich może wpłynąć na jakość przeglądania.'
                        },
                        {
                            title: 'Pliki niezbędne',
                            description: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania witryny i nie można ich wyłączyć.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Analityka',
                            description: 'Te pliki cookie zbierają informacje o tym, jak korzystasz z naszej witryny. Wszystkie dane są anonimizowane i nie mogą być użyte do zidentyfikowania Ciebie. (anonimowe)',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Kontakt',
                            // FIX: Poprawny email link z tekstem wewnątrz <a>
                            description: `Pytania? <a href="mailto:${window.ppgmConfig?.contactEmail || ''}">Skontaktuj się z nami</a>`
                        }
                    ]
                }
            }
        }
    }
};

/**
 * Inicjalizacja CookieConsent po załadowaniu DOM
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof CookieConsent !== 'undefined' && typeof CookieConsent.run === 'function') {
            CookieConsent.run(config);
        }
    });
} else {
    if (typeof CookieConsent !== 'undefined' && typeof CookieConsent.run === 'function') {
        CookieConsent.run(config);
    }
}
