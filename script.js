/**
 * EasyTest - Interactive Quiz App v3
 */

// --- Data & Config ---
const I18N = {
    es: {
        nav_create: "Crear Test",
        nav_create_flash: "Crear Tarjetas",
        nav_modify: "Modificar Datos",
        nav_merge: "Unir",
        nav_flashcards: "Estudiar Tarjetas",
        nav_take: "Hacer Test",
        nav_info: "Información",
        creator_title: "Crear Nuevo Test",
        create_flash_title: "Crear Mazo de Tarjetas",
        modify_title: "Modificar Datos (Test o Tarjetas)",
        merge_title: "Unir (mismo tipo)",
        error_merge_mixed_types: "No puedes mezclar Tests con Tarjetas. Selecciona solo un tipo.",
        creator_label: "Pega las preguntas aquí (Pregunta + Respuestas):",
        btn_parse: "Añadir Preguntas", // Changed from Procesar
        selection_title: "Seleccionar Respuestas",
        selection_subtitle: "Marca la correcta y añade una explicación opcional.",
        flash_title: "Modo Tarjetas de Estudio",
        flash_subtitle: "Estudia cualquier test como tarjetas.",
        btn_start_flash: "Empezar a Estudiar",
        flash_deck_name_label: "Nombre del Mazo:",
        flash_create_label: "Pega Términos (Anverso | Reverso | Pista opcional):",
        flash_hint_btn: "💡 Pista",
        flash_btn_fail: "Fallo",
        flash_btn_pass: "Acierto",
        error_flash_format: "Formato inválido. Usa 'Término | Definición'",
        error_flash_format_hint: "Usa 'Termino | Definición' o 'Termino | Definición | Pista'",
        placeholder_deck_name: "ej. Vocabulario",
        placeholder_flash_input: "Manzana | Apple | Una fruta roja\nCasa | House\nCoche | Car",
        btn_create_deck: "Crear Mazo",
        flash_tap: "Toca para voltear",
        btn_upload_flash: "Cargar Mazo (JSON)",
        btn_download_flash: "Descargar Mazo",
        select_deck_label: "Seleccionar Mazo:",
        flashcard_back_label: "Reverso",
        error_flashcard_back_empty: "El reverso no puede estar vacío.",
        flash_retained: "Recordado",
        error_flash_empty: "Pega algunos términos primero.",
        flash_deck_created: "Mazo creado con éxito: ",
        flash_shuffle_label: "Barajar Mazo",
        btn_save: "Guardar en Test Actual",
        btn_upload: "Subir JSON",
        btn_download: "Descargar JSON",
        btn_deduplicate: "Borrar Duplicados",
        questions_list_title: "Preguntas Actuales",
        msg_no_questions: "No hay preguntas en el test actual.",
        btn_clear_all: "Borrar Todas las Preguntas",
        quiz_ready_title: "¿Listo para empezar?",
        btn_start: "Empezar Test",
        btn_reset: "Reiniciar Progreso",
        btn_next: "Siguiente",
        results_title: "¡Test Completado!",
        btn_retry_failed: "Repetir Fallos",
        btn_restart_all: "Reiniciar Todo",
        info_title: "Cómo usar",
        info_p1: "1. <b>Crea</b>: Genera Tests o Tarjetas pegando texto o usando IA.",
        info_p2: "2. <b>Modifica y Une</b>: Edita preguntas, borra duplicados o une varios tests.",
        info_p3: "3. <b>Estudia</b>: Haz los tests o usa el modo Tarjetas para memorizar.",
        info_p4: "4. <b>Privacidad Total</b>: Tus datos se guardan solo en tu navegador. Nada sale de tu ordenador.",
        prompt_title: "Ayuda para Prompt AI",
        prompt_desc: "Copia este prompt en ChatGPT/Claude:",
        btn_copy: "Copiar",
        confirm_reset: "¿Seguro que quieres reiniciar el progreso?",
        explanation_label: "Explicación (Opcional):",
        explanation_prefix: "Explicación:",
        correct_msg: "¡Correcto!",
        incorrect_msg: "Incorrecto",
        delete_confirm: "¿Borrar esta pregunta?",
        delete_all_confirm: "¿Borrar TODAS las preguntas? No se puede deshacer.",
        prompt_filename: "Nombre del archivo JSON:",
        merge_success: "Preguntas importadas correctamente.",
        import_success: "Test importado correctamente",
        save_success: "Preguntas añadidas al test actual.",
        edit_title: "Editar Pregunta",
        edit_question_label: "Pregunta:",
        edit_explanation_label: "Explicación (Opcional):",
        btn_cancel: "Cancelar",
        btn_save_changes: "Guardar Cambios",
        btn_restart_active: "Reiniciar Test",
        lang_toggle_text: "ES / EN",
        creator_placeholder: "Pregunta 1...\nRespuesta A\nRespuesta B\nRespuesta C\nRespuesta D\n\nPregunta 2...",
        ai_prompt_text: "Actúa como un profesor. Genera contenido para EasyApproved.\n\nPARA TESTS (QUIZZES):\nFormatea cada pregunta exactamente así:\n\nPregunta text?\nOpción A\nOpción B\nOpción C\nOpción D\n\nSepara bloques con doble salto de línea. No pongas A/B/C delante.\n\nPARA TARJETAS (FLASHCARDS):\nUsa este formato línea por línea:\nTérmino | Definición | Pista Opcional\n\nEjemplo:\nMitocondria | Organelo celular de energía | Biología",
        score_text: "Has conseguido un <span class='score-highlight'>{percent}%</span>",
        test_name_label: "Nombre del Test:",
        test_name_placeholder: "ej. Matemáticas 101",
        select_test_label: "Seleccionar Test:",
        btn_delete_test: "Borrar Test Completo",
        btn_exit: "Salir",
        quiz_status_format: "{count} preguntas disponibles. ({answered} respondidas, {correct} correctas)",
        no_tests_option: "-- Sin tests --",
        question_counter_format: "Pregunta {current}/{total}",
        score_format: "Puntuación: {score}",
        creation_mode_label: "Modo:",
        mode_new: "Nuevo Test",
        mode_existing: "Añadir a Test Existente",
        available_tests_title: "Tests Disponibles",
        btn_select_all: "Todos",
        btn_deselect_all: "Ninguno",
        btn_create_merged: "Combinar y Crear",
        error_no_name: "Por favor escribe un nombre para el test.",
        error_no_selection: "Selecciona al menos un test.",
        error_paste_text: "Por favor pega texto.",
        error_no_valid_questions: "No se encontraron preguntas válidas. Revisa el formato.",
        error_select_correct: "Selecciona la respuesta correcta para todas las preguntas.",
        prompt_empty_name: "Nombre vacío. ¿Crear con nombre: ",
        error_select_existing: "Por favor selecciona un test existente.",
        error_question_empty: "El texto de la pregunta no puede estar vacío.",
        error_min_answers: "Debe tener al menos 2 respuestas.",
        error_correct_invalid: "La respuesta correcta seleccionada está vacía o es inválida.",
        confirm_delete_test: "¿Estás seguro de que quieres borrar el test COMPLETO ",
        error_no_quiz_selected: "Ningún test seleccionado.",
        error_invalid_json: "Estructura JSON inválida. Necesita un array 'questions'.",
        error_parsing_json: "Error al analizar el archivo JSON.",
        confirm_overwrite: "¿Sobrescribir el test existente ",
        error_no_retry: "¡No hay preguntas falladas para reintentar!",
        msg_duplicates_found: "Encontrados {count} duplicados. ¿Borrarlos?",
        msg_duplicates_removed: "Eliminados {count} duplicados.",
        msg_no_duplicates: "No se encontraron duplicados.",
    },
    en: {
        nav_create: "Create Test",
        nav_create_flash: "Create Flashcards",
        nav_modify: "Modify Data",
        nav_merge: "Merge",
        nav_flashcards: "Study Flashcards",
        nav_take: "Take Test",
        nav_info: "Info",
        creator_title: "Create New Test",
        create_flash_title: "Create Flashcard Deck",
        modify_title: "Modify Data (Test or Flashcards)",
        merge_title: "Merge (same type)",
        error_merge_mixed_types: "Cannot merge Tests with Flashcards. Select only one type.",
        btn_parse: "Process Questions",
        selection_title: "Select Answers",
        selection_subtitle: "Mark the correct answer and optionally add an explanation.",
        btn_save: "Save to Current Test",
        btn_upload: "Upload JSON",
        btn_download: "Download JSON",
        btn_deduplicate: "Delete Duplicates",
        modify_title: "Modify Current Test",
        questions_list_title: "Current Questions",
        msg_no_questions: "No questions in current test.",
        btn_clear_all: "Delete All Questions",
        quiz_ready_title: "Ready to Start?",
        btn_start: "Start Quiz",
        btn_reset: "Reset Progress",
        btn_next: "Next",
        results_title: "Quiz Completed!",
        btn_retry_failed: "Retry Failed",
        flash_title: "Flashcard Study Mode",
        flash_subtitle: "Study any test as flashcards.",
        btn_start_flash: "Start Studying",
        flash_deck_name_label: "Deck Name:",
        flash_create_label: "Paste Terms (Front | Back | Optional Hint):",
        flash_hint_btn: "💡 Hint",
        flash_btn_fail: "Miss",
        flash_btn_pass: "Hit",
        error_flash_format: "Invalid format. Use 'Term | Definition'",
        error_flash_format_hint: "Use 'Term | Definition' or 'Term | Definition | Hint'",
        placeholder_deck_name: "e.g. Vocabulary",
        placeholder_flash_input: "Apple | Manzana | A red fruit\nHouse | Casa\nCar | Coche",
        btn_create_deck: "Create Deck",
        flash_tap: "Tap to flip",
        btn_upload_flash: "Load Deck (JSON)",
        btn_download_flash: "Download Deck",
        select_deck_label: "Select Deck:",
        flashcard_back_label: "Back",
        error_flashcard_back_empty: "Back cannot be empty.",
        flash_retained: "Retained",
        error_flash_empty: "Paste some terms first.",
        flash_deck_created: "Deck created successfully: ",
        flash_shuffle_label: "Shuffle Deck",
        btn_restart_all: "Restart All",
        info_title: "How to Use",
        info_p1: "1. <b>Create</b>: Generate Quizzes or Flashcards by pasting text or using AI.",
        info_p2: "2. <b>Modify & Merge</b>: Edit questions, remove duplicates, or merge tests.",
        info_p3: "3. <b>Study</b>: Take quizzes or use Flashcard mode for memorization.",
        info_p4: "4. <b>Total Privacy</b>: Your data is stored locally in your browser. Nothing leaves your computer.",
        prompt_title: "AI Prompt Helper",
        prompt_desc: "Copy this prompt to ChatGPT/Claude:",
        btn_copy: "Copy",
        confirm_reset: "Are you sure you want to reset progress?",
        explanation_label: "Explanation (Optional):",
        explanation_prefix: "Explanation:",
        correct_msg: "Correct!",
        incorrect_msg: "Incorrect",
        delete_confirm: "Delete this question?",
        delete_all_confirm: "Delete ALL questions? This cannot be undone.",
        prompt_filename: "JSON Filename:",
        merge_success: "Questions imported successfully.",
        import_success: "Test imported successfully",
        save_success: "Questions added to current test.",
        edit_title: "Edit Question",
        edit_question_label: "Question:",
        edit_explanation_label: "Explanation (Optional):",
        btn_cancel: "Cancel",
        btn_save_changes: "Save Changes",
        btn_restart_active: "Restart Quiz",
        lang_toggle_text: "EN / ES",
        creator_placeholder: "Question 1...\nAnswer A\nAnswer B\nAnswer C\nAnswer D\n\nQuestion 2...",
        ai_prompt_text: "Act as a teacher. Generate content for EasyApproved.\n\nFOR QUIZZES:\nFormat each question exactly like this:\n\nQuestion text?\nOption A\nOption B\nOption C\nOption D\n\nSeparate blocks with double new lines. No A/B/C prefixes.\n\nFOR FLASHCARDS:\nUse this format line by line:\nTerm | Definition | Optional Hint\n\nExample:\nMitochondria | Powerhouse of the cell | Biology",
        score_text: "You got <span class='score-highlight'>{percent}%</span>",
        test_name_label: "Test Name:",
        test_name_placeholder: "e.g. Mathematics 101",
        select_test_label: "Select Test:",
        btn_delete_test: "Delete Entire Test",
        btn_exit: "Exit",
        quiz_status_format: "{count} questions available. ({answered} answered, {correct} correct)",
        no_tests_option: "-- No tests --",
        question_counter_format: "Question {current}/{total}",
        score_format: "Score: {score}",
        creation_mode_label: "Mode:",
        mode_new: "New Test",
        mode_existing: "Add to Existing Test",
        available_tests_title: "Available Tests",
        btn_select_all: "Select All",
        btn_deselect_all: "Deselect All",
        btn_create_merged: "Merge & Create",
        error_no_name: "Please enter a name for the test.",
        error_no_selection: "Select at least one test.",
        error_paste_text: "Please paste text.",
        error_no_valid_questions: "No valid questions found. Check format.",
        error_select_correct: "Select correct answers for all questions.",
        prompt_empty_name: "Empty name. Create with name: ",
        error_select_existing: "Please select an existing test.",
        error_question_empty: "Question text cannot be empty.",
        error_min_answers: "Must have at least 2 answers.",
        error_correct_invalid: "The selected correct answer is empty or invalid.",
        confirm_delete_test: "Are you sure you want to delete the ENTIRE test ",
        error_no_quiz_selected: "No quiz selected.",
        error_invalid_json: "Invalid JSON structure. Needs \"questions\" array.",
        error_parsing_json: "Error parsing JSON file.",
        confirm_overwrite: "Overwrite existing test ",
        error_parsing_json: "Error parsing JSON file.",
        confirm_overwrite: "Overwrite existing test ",
        error_no_retry: "No failed questions to retry!",
        msg_duplicates_found: "Found {count} duplicate(s). Delete them?",
        msg_duplicates_removed: "Removed {count} duplicates.",
        msg_no_duplicates: "No duplicates found.",
    }
};

// --- Managers ---

// Mobile Menu Manager
class MobileMenuManager {
    constructor() {
        this.menuToggle = document.getElementById('menu-toggle');
        this.mainNav = document.getElementById('main-nav');
        this.navOverlay = document.getElementById('nav-overlay');
        this.navBtns = document.querySelectorAll('.nav-btn');
        this.init();
    }

    init() {
        if (!this.menuToggle || !this.mainNav || !this.navOverlay) return;

        // Toggle menu on button click
        this.menuToggle.addEventListener('click', () => this.toggleMenu());

        // Close menu when overlay is clicked
        this.navOverlay.addEventListener('click', () => this.closeMenu());

        // Close menu when a nav button is clicked
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', () => this.closeMenu());
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mainNav.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isActive = this.mainNav.classList.contains('active');
        if (isActive) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.mainNav.classList.add('active');
        this.navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    closeMenu() {
        this.mainNav.classList.remove('active');
        this.navOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// --- Managers ---

class ThemeManager {
    constructor() {
        this.toggleBtn = document.getElementById('theme-toggle');
        this.sunIcon = this.toggleBtn.querySelector('.sun-icon');
        this.moonIcon = this.toggleBtn.querySelector('.moon-icon');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }
    init() {
        this.applyTheme(this.currentTheme);
        this.toggleBtn.addEventListener('click', () => {
            this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.applyTheme(this.currentTheme);
        });
    }
    applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            this.sunIcon.classList.remove('hidden');
            this.moonIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            this.sunIcon.classList.add('hidden');
            this.moonIcon.classList.remove('hidden');
        }
        localStorage.setItem('theme', theme);
    }
}

class LangManager {
    constructor() {
        this.toggleBtn = document.getElementById('lang-toggle');
        this.langText = this.toggleBtn.querySelector('.lang-text');
        this.currentLang = localStorage.getItem('language') || 'es';
        this.init();
    }
    init() {
        // Force update on load
        this.applyLang(this.currentLang);

        this.toggleBtn.addEventListener('click', () => {
            // Toggle
            const newLang = this.currentLang === 'es' ? 'en' : 'es';
            this.applyLang(newLang);
        });
    }
    applyLang(lang) {
        this.currentLang = lang; // Update state
        localStorage.setItem('language', lang); // Save immediately

        // Update toggle text
        this.langText.textContent = lang === 'es' ? "ES | en" : "es | EN";

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (I18N[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        // Some inputs might use data-i18n for placeholder, others might not.
                        // Standardize: if input has data-i18n, it targets placeholder.
                        el.placeholder = I18N[lang][key];
                    }
                } else {
                    el.innerHTML = I18N[lang][key];
                }
            }
        });

        // Separate pass for explicit placeholder keys if needed, or misuse of data-i18n on inputs
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (I18N[lang][key]) {
                el.placeholder = I18N[lang][key];
            }
        });

        const rawInput = document.getElementById('raw-input');
        if (rawInput && I18N[lang]['creator_placeholder']) {
            rawInput.placeholder = I18N[lang]['creator_placeholder'];
        }

        const testNameInput = document.getElementById('test-name-input');
        if (testNameInput && I18N[lang]['test_name_placeholder']) {
            testNameInput.placeholder = I18N[lang]['test_name_placeholder'];
        }

        const aiPrompt = document.getElementById('ai-prompt-text');
        if (aiPrompt && I18N[lang]['ai_prompt_text']) {
            aiPrompt.innerText = I18N[lang]['ai_prompt_text'];
        }

        // Dispatch global event for app to listen
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
    t(key) {
        return I18N[this.currentLang][key] || key;
    }
}

class StorageManager {
    static getOldData() {
        const data = localStorage.getItem('quiz_data');
        return data ? JSON.parse(data) : null;
    }

    static getQuizzes() {
        const data = localStorage.getItem('all_quizzes');
        if (!data) {
            // Migration check
            const old = this.getOldData();
            if (old && old.questions && old.questions.length > 0) {
                const initial = { "Default Test": old.questions };
                this.saveQuizzes(initial);
                localStorage.removeItem('quiz_data'); // Cleanup
                return initial;
            }
            return {};
        }
        return JSON.parse(data);
    }

    static saveQuizzes(quizzes) {
        localStorage.setItem('all_quizzes', JSON.stringify(quizzes));
    }

    static getActiveQuizName() {
        return localStorage.getItem('active_quiz_name') || null;
    }

    static setActiveQuizName(name) {
        localStorage.setItem('active_quiz_name', name);
    }
}

// --- App Logic ---

class QuizApp {
    constructor() {
        this.themeManager = new ThemeManager();
        // Pass callback to update dynamic UI parts on language toggle
        this.langManager = new LangManager();
        this.mobileMenuManager = new MobileMenuManager();
        this.state = {
            quizzes: {},
            currentQuizName: null,
            questions: [], // Shortcut to current quiz questions
            activeQuestions: [],
            currentIndex: 0,
            score: 0,
            mode: 'all',
            streak: 0, // Track active streak
            currentEditIndex: null
        };

        this.cacheDOM();
        this.bindEvents();

        // Listen for language changes
        window.addEventListener('languageChanged', () => {
            this.updateQuizStartUI();
            this.updateSelectors();
            // If active quiz, rerender question to update dynamic texts
            if (!this.quizActiveView.classList.contains('hidden')) {
                this.renderQuestion();
            }
            // If results, rerender results
            if (!this.quizResultsView.classList.contains('hidden')) {
                this.showResults();
            }
        });

        this.initData();
    }

    initData() {
        this.state.quizzes = StorageManager.getQuizzes();

        let activeName = StorageManager.getActiveQuizName();
        const quizNames = Object.keys(this.state.quizzes);

        if (quizNames.length > 0) {
            if (!activeName || !this.state.quizzes[activeName]) {
                activeName = quizNames[0]; // Default to first
            }
        } else {
            activeName = null;
        }

        this.setActiveQuiz(activeName);
        this.updateSelectors();
    }

    setActiveQuiz(name) {
        this.state.currentQuizName = name;
        StorageManager.setActiveQuizName(name);

        if (name && this.state.quizzes[name]) {
            this.state.questions = this.state.quizzes[name];
        } else {
            this.state.questions = [];
        }

        // Update UI logic
        this.updateQuizStartUI();
        this.updateModifyList();
        this.updateSelectors(); // Ensure selectors match state
    }

    cacheDOM() {
        this.navBtns = document.querySelectorAll('.nav-btn');
        this.sections = document.querySelectorAll('main section');

        // Creator
        this.testNameInput = document.getElementById('test-name-input');
        this.rawInput = document.getElementById('raw-input');
        this.parseBtn = document.getElementById('parse-btn');

        // Creation Mode
        this.creationModeRadios = document.getElementsByName('creation-mode');
        this.newTestContainer = document.getElementById('new-test-container');
        this.existingTestContainer = document.getElementById('existing-test-container');
        this.existingTestSelect = document.getElementById('existing-test-select');

        this.selectionArea = document.getElementById('selection-area');
        this.questionsPreview = document.getElementById('questions-preview');
        this.saveQuizBtn = document.getElementById('save-quiz-btn');

        // Selectors
        this.quizSelect = document.getElementById('quiz-select'); // Start View
        this.modifyQuizSelect = document.getElementById('modify-quiz-select'); // Modify View

        // Modify
        this.uploadBtn = document.getElementById('upload-btn');
        this.fileInput = document.getElementById('json-upload-input');
        this.downloadBtn = document.getElementById('download-btn');
        this.deduplicateBtn = document.getElementById('btn-deduplicate'); // New Button
        this.modifyList = document.getElementById('modify-list');
        this.modifyCount = document.getElementById('total-questions-count');
        this.clearAllBtn = document.getElementById('clear-all-btn');
        this.deleteTestBtn = document.getElementById('delete-test-btn');

        this.editQuestionContainer = document.getElementById('edit-question-container');
        this.editQuestionText = document.getElementById('edit-question-text');
        this.editAnswersContainer = document.getElementById('edit-answers-container');
        this.editExplanation = document.getElementById('edit-explanation');
        this.saveEditBtn = document.getElementById('save-edit-btn');
        this.cancelEditBtn = document.getElementById('cancel-edit-btn');

        // Merge
        this.mergeListContainer = document.getElementById('merge-list-container');
        this.createMergedBtn = document.getElementById('create-merged-btn');
        this.selectAllMergeBtn = document.getElementById('select-all-merge-btn');
        this.deselectAllMergeBtn = document.getElementById('deselect-all-merge-btn');

        // Quiz
        this.quizStartView = document.getElementById('quiz-start-view');
        this.quizActiveView = document.getElementById('quiz-active-view');
        this.quizResultsView = document.getElementById('quiz-results-view');
        this.startBtn = document.getElementById('start-btn');
        this.exitActiveBtn = document.getElementById('exit-active-btn');
        this.restartActiveBtn = document.getElementById('restart-active-btn');
        this.resetStatsBtn = document.getElementById('reset-stats-btn');
        this.creatorSection = document.getElementById('creator-section');
        this.createFlashSection = document.getElementById('create-flash-section'); // New Section
        this.modifySection = document.getElementById('modify-section');
        this.mergeSection = document.getElementById('merge-section');
        this.quizSection = document.getElementById('quiz-section');
        this.infoSection = document.getElementById('info-section');
        this.flashcardSection = document.getElementById('flashcard-section');

        this.sections = [this.creatorSection, this.createFlashSection, this.modifySection, this.mergeSection, this.quizSection, this.infoSection, this.flashcardSection];
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.feedbackArea = document.getElementById('feedback-area');
        this.feedbackMsg = document.getElementById('feedback-msg');
        this.explanationBox = document.getElementById('explanation-box');
        this.explanationText = document.getElementById('explanation-text');
        this.nextBtn = document.getElementById('next-question-btn');
        this.questionCounter = document.getElementById('question-counter');
        this.scoreDisplay = document.getElementById('score-display');
        this.finalScore = document.getElementById('final-score');
        this.retryFailedBtn = document.getElementById('retry-failed-btn');
        this.restartAllBtn = document.getElementById('restart-all-btn');

        this.progressBar = document.getElementById('progress-bar');
        this.streakDisplay = document.getElementById('streak-display');

        this.progressBar = document.getElementById('progress-bar');
        this.streakDisplay = document.getElementById('streak-display');

        // Flashcards
        this.flashcardSetupView = document.getElementById('flashcard-setup-view');
        this.flashcardActiveView = document.getElementById('flashcard-active-view');
        this.flashcardResultsView = document.getElementById('flashcard-results-view');
        this.flashcardQuizSelect = document.getElementById('flashcard-quiz-select');
        this.startFlashBtn = document.getElementById('start-flash-btn');
        this.flashDeckName = document.getElementById('flash-deck-name');
        this.flashRawInput = document.getElementById('flash-raw-input');
        this.createFlashDeckBtn = document.getElementById('create-flash-deck-btn');
        this.exitFlashBtn = document.getElementById('exit-flash-btn');

        // Flash Mode Elements
        this.flashCreationModeRadios = document.querySelectorAll('input[name="flash-creation-mode"]');
        this.newFlashContainer = document.getElementById('new-flash-container'); // Correct ID
        this.existingFlashContainer = document.getElementById('existing-flash-container');
        this.existingFlashSelect = document.getElementById('existing-flash-select');
        this.flashShuffleToggle = document.getElementById('flash-shuffle-toggle'); // New Toggle

        this.flashCounter = document.getElementById('flash-counter');
        this.flashCardElement = document.getElementById('flash-card-element');
        this.flashFrontText = document.getElementById('flash-front-text');
        this.flashBackText = document.getElementById('flash-back-text');
        this.flashHintContainer = document.getElementById('flash-hint-container');
        this.flashHintBtn = document.getElementById('flash-hint-btn');
        this.flashHintText = document.getElementById('flash-hint-text');
        this.flashControls = document.getElementById('flash-controls');
        this.flashFailBtn = document.getElementById('flash-fail-btn');
        this.flashPassBtn = document.getElementById('flash-pass-btn');
        this.flashFinalScore = document.getElementById('flash-final-score');
        this.flashResultsMsg = document.getElementById('flash-results-msg');
        this.flashRetryBtn = document.getElementById('flash-retry-btn');
        this.flashRestartBtn = document.getElementById('flash-restart-btn');
        this.flashUploadInput = document.getElementById('flash-upload-input');
        this.flashDownloadBtn = document.getElementById('flash-download-btn');
        this.flashStreakDisplay = document.getElementById('flash-streak-display');
        this.flashProgressBar = document.getElementById('flash-progress-bar');

        // Info
        this.copyPromptBtn = document.getElementById('copy-prompt-btn');
    }

    bindEvents() {
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.closest('.nav-btn').dataset.target;
                this.switchSection(target);
            });
        });

        // Selectors Change
        this.quizSelect.addEventListener('change', (e) => this.handleQuizChange(e.target.value));
        this.modifyQuizSelect.addEventListener('change', (e) => this.handleQuizChange(e.target.value));
        this.flashcardQuizSelect.addEventListener('change', (e) => this.handleFlashcardQuizChange(e.target.value));


        // Creation Mode Toggle
        this.creationModeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'new') {
                    this.newTestContainer.classList.remove('hidden');
                    this.existingTestContainer.classList.add('hidden');
                } else {
                    this.newTestContainer.classList.add('hidden');
                    this.existingTestContainer.classList.remove('hidden');
                }
            });
        });

        // Flash Creation Mode Toggle
        this.flashCreationModeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'new') {
                    this.newFlashContainer.classList.remove('hidden');
                    this.existingFlashContainer.classList.add('hidden');
                } else {
                    this.newFlashContainer.classList.add('hidden');
                    this.existingFlashContainer.classList.remove('hidden');
                }
            });
        });

        // Creator
        this.parseBtn.addEventListener('click', () => this.parseQuestions());
        this.saveQuizBtn.addEventListener('click', () => this.saveToCurrentTest());

        // Modify
        this.uploadBtn.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        this.downloadBtn.addEventListener('click', () => this.downloadJSON());
        this.deduplicateBtn.addEventListener('click', () => this.removeDuplicates());
        this.clearAllBtn.addEventListener('click', () => this.clearAllQuestions());
        this.deleteTestBtn.addEventListener('click', () => this.deleteCurrentTest());

        this.saveEditBtn.addEventListener('click', () => this.saveEdit());
        this.cancelEditBtn.addEventListener('click', () => this.cancelEdit());

        // Merge
        this.createMergedBtn.addEventListener('click', () => this.createMergedTest());
        this.selectAllMergeBtn.addEventListener('click', () => this.toggleMergeSelection(true));
        this.deselectAllMergeBtn.addEventListener('click', () => this.toggleMergeSelection(false));

        // Quiz
        this.startBtn.addEventListener('click', () => {
            this.state.mode = 'all';
            this.startQuiz();
        });
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.retryFailedBtn.addEventListener('click', () => {
            this.state.mode = 'retry';
            this.startQuiz();
        });
        this.restartAllBtn.addEventListener('click', () => {
            this.state.mode = 'all';
            this.startQuiz();
        });

        this.resetStatsBtn.addEventListener('click', () => {
            if (confirm(this.langManager.t('confirm_reset'))) {
                this.state.questions.forEach(q => q.status = null);
                this.saveState();
                this.updateQuizStartUI();
            }
        });

        this.restartActiveBtn.addEventListener('click', () => {
            if (confirm(this.langManager.t('confirm_reset'))) {
                this.startQuiz();
            }
        });

        this.exitActiveBtn.addEventListener('click', () => {
            if (confirm(this.langManager.t('confirm_reset'))) { // Or specific message? "Exit quiz?"
                this.quizActiveView.classList.add('hidden');
                this.quizStartView.classList.remove('hidden');
                this.updateQuizStartUI();
            }
        });

        this.copyPromptBtn.addEventListener('click', () => {
            // Must re-select element to get updated text if it changed? actually element is static id.
            const text = document.getElementById('ai-prompt-text').innerText;
            navigator.clipboard.writeText(text);
        });

        // Flashcards Binding
        this.bindFlashEvents();
    }

    handleQuizChange(newName) {
        if (!newName) return;
        this.setActiveQuiz(newName);
    }

    handleFlashcardQuizChange(newName) {
        // This just updates the selected value, no need to setActiveQuiz
        // The startFlashSession will read the selected value directly.
        // But we might want to update the modify list if the user switches to modify section
        // after selecting a flashcard deck here.
        this.state.currentQuizName = newName; // Set active quiz name for modify section
        StorageManager.setActiveQuizName(newName);
        this.updateModifyList(); // Update modify list to show selected flashcard deck
    }

    updateSelectors() {
        // Filter: Only include "Quizzes" (where isFlashcard is falsy) for QUIZ SELECT
        // But for MODIFY, we want ALL.
        const allNames = Object.keys(this.state.quizzes);

        const quizNames = allNames.filter(name => {
            const questions = this.state.quizzes[name];
            if (!questions || questions.length === 0) return true; // Empty quizzes can be considered quizzes
            return !questions[0].isFlashcard;
        });

        const flashcardNames = allNames.filter(name => {
            const questions = this.state.quizzes[name];
            if (!questions || questions.length === 0) return false;
            return questions[0].isFlashcard === true;
        });

        // Helper to generate options
        const generateOptions = (namesList) => {
            if (namesList.length === 0) {
                return `<option value="">${this.langManager.t('no_tests_option')}</option>`;
            }
            // Check if current is in list
            const currentInList = namesList.includes(this.state.currentQuizName);

            return namesList.map((name, index) => {
                // Select if it matches current, OR if current is invalid/not-in-list and this is the first one.
                const isSelected = (name === this.state.currentQuizName) || (!currentInList && index === 0);
                return `<option value="${name}" ${isSelected ? 'selected' : ''}>${name} (${this.state.quizzes[name].length})</option>`;
            }).join('');
        };

        // Quiz Select: Only Quizzes
        if (this.quizSelect) {
            this.quizSelect.innerHTML = generateOptions(quizNames);
        }

        // Modify Select: ALL
        if (this.modifyQuizSelect) {
            this.modifyQuizSelect.innerHTML = generateOptions(allNames);
        }

        // Existing Test Select (for adding questions): Probably ALL?
        if (this.existingTestSelect) {
            this.existingTestSelect.innerHTML = generateOptions(allNames);
        }

        // Flashcard Select: Only Flashcards
        if (this.flashcardQuizSelect) {
            this.flashcardQuizSelect.innerHTML = generateOptions(flashcardNames);
        }

        // Disable sections if no tests
        if (quizNames.length === 0) {
            if (this.quizSelect) this.quizSelect.disabled = true;
        } else {
            if (this.quizSelect) this.quizSelect.disabled = false;
        }

        if (allNames.length === 0) {
            if (this.modifyQuizSelect) this.modifyQuizSelect.disabled = true;
            if (this.existingTestSelect) this.existingTestSelect.disabled = true;
        } else {
            if (this.modifyQuizSelect) this.modifyQuizSelect.disabled = false;
            if (this.existingTestSelect) this.existingTestSelect.disabled = false;
        }

        if (flashcardNames.length === 0) {
            if (this.flashcardQuizSelect) this.flashcardQuizSelect.disabled = true;
            if (this.startFlashBtn) this.startFlashBtn.disabled = true;
            if (this.existingFlashSelect) this.existingFlashSelect.disabled = true;
        } else {
            if (this.flashcardQuizSelect) this.flashcardQuizSelect.disabled = false;
            if (this.startFlashBtn) this.startFlashBtn.disabled = false;
            if (this.existingFlashSelect) {
                this.existingFlashSelect.disabled = false;
                this.existingFlashSelect.innerHTML = generateOptions(flashcardNames);
            }
        }

        this.updateMergeList();
    }

    saveState() {
        if (this.state.currentQuizName) {
            this.state.quizzes[this.state.currentQuizName] = this.state.questions;
            StorageManager.saveQuizzes(this.state.quizzes);
        }
    }

    switchSection(targetId) {
        this.navBtns.forEach(btn => {
            btn.dataset.target === targetId ? btn.classList.add('active') : btn.classList.remove('active');
        });
        this.sections.forEach(sec => {
            sec.id === targetId ? sec.classList.replace('hidden-section', 'active-section') : sec.classList.replace('active-section', 'hidden-section');
        });

        if (targetId === 'merge-section') {
            this.updateMergeList();
        }

        if (targetId === 'quiz-section' || targetId === 'modify-section') {
            // Refresh UI incase of changes
            this.updateQuizStartUI();
            this.updateModifyList();
        }

        if (targetId === 'flashcard-section') {
            this.updateSelectors(); // Use general updateSelectors
        }
    }

    // --- Creator Logic ---
    parseQuestions() {
        const text = this.rawInput.value.trim();
        if (!text) {
            alert(this.langManager.t('error_paste_text'));
            return;
        }
        const blocks = text.split(/\n\s*\n/);
        const parsed = [];
        blocks.forEach((block) => {
            const lines = block.split('\n').map(l => l.trim()).filter(l => l);
            if (lines.length < 2) return;
            parsed.push({
                id: crypto.randomUUID(),
                text: lines[0],
                options: lines.slice(1),
                correctIndex: null,
                explanation: "",
                status: null
            });
        });

        if (parsed.length === 0) {
            alert(this.langManager.t('error_no_valid_questions'));
            return;
        }

        this.renderSelectionUI(parsed);
    }

    renderSelectionUI(questions) {
        this.selectionArea.classList.remove('hidden');
        this.questionsPreview.innerHTML = '';
        this.tempQuestions = questions;

        questions.forEach((q, qIndex) => {
            const div = document.createElement('div');
            div.className = 'question-select-item';

            const p = document.createElement('p');
            p.textContent = `${qIndex + 1}. ${q.text}`;
            div.appendChild(p);

            const optsDiv = document.createElement('div');
            optsDiv.className = 'options-list';

            q.options.forEach((opt, oIndex) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = opt;
                btn.onclick = () => {
                    optsDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    this.tempQuestions[qIndex].correctIndex = oIndex;
                };
                optsDiv.appendChild(btn);
            });
            div.appendChild(optsDiv);

            // Explanation Input
            const expInput = document.createElement('textarea');
            expInput.className = 'explanation-input';
            expInput.placeholder = this.langManager.t('explanation_label');
            expInput.style.height = "60px";
            expInput.oninput = (e) => {
                this.tempQuestions[qIndex].explanation = e.target.value;
            };
            div.appendChild(expInput);

            this.questionsPreview.appendChild(div);
        });
    }

    saveToCurrentTest() {
        const missing = this.tempQuestions.filter(q => q.correctIndex === null);
        if (missing.length > 0) {
            alert(this.langManager.t('error_select_correct'));
            return;
        }

        let targetName = "";

        // Determine mode
        const mode = Array.from(this.creationModeRadios).find(r => r.checked).value;

        if (mode === 'new') {
            targetName = this.testNameInput.value.trim();
            if (!targetName) {
                const dateStr = new Date().toLocaleDateString();
                targetName = this.langManager.currentLang === 'es' ? "Nuevo Test " + dateStr : "New Test " + dateStr;
                if (!confirm(this.langManager.t('prompt_empty_name') + targetName + "?")) {
                    return;
                }
            }
        } else {
            targetName = this.existingTestSelect.value;
            if (!targetName) {
                alert(this.langManager.t('error_select_existing'));
                return;
            }
        }

        // Initialize if new (should be implied by mode but safe to check)
        if (!this.state.quizzes[targetName]) {
            this.state.quizzes[targetName] = [];
        }

        // Append (check for duplicates?)
        this.state.quizzes[targetName] = [...this.state.quizzes[targetName], ...this.tempQuestions];

        // Set as active
        this.setActiveQuiz(targetName);
        this.saveState();

        alert(this.langManager.t('save_success'));
        this.selectionArea.classList.add('hidden');
        this.rawInput.value = '';
        this.testNameInput.value = ''; // Reset name input
        this.updateSelectors();
    }

    // --- Modify Logic ---
    updateModifyList() {
        this.modifyList.innerHTML = '';
        this.modifyCount.textContent = this.state.questions.length;

        if (this.state.questions.length === 0) {
            this.modifyList.innerHTML = `<p class="empty-msg" data-i18n="msg_no_questions">${this.langManager.t('msg_no_questions')}</p>`;
            return;
        }

        this.state.questions.forEach((q, index) => {
            const item = document.createElement('div');
            item.className = 'modify-item';

            const text = document.createElement('p');
            text.textContent = `${index + 1}. ${q.text}`;

            const controls = document.createElement('div');
            controls.style.display = 'flex';
            controls.style.gap = '5px';

            const editBtn = document.createElement('button');
            editBtn.className = 'btn-small btn-secondary';
            editBtn.textContent = '✏️';
            editBtn.onclick = () => this.editQuestion(index);

            const delBtn = document.createElement('button');
            delBtn.className = 'btn-small btn-danger';
            delBtn.textContent = '❌';
            delBtn.onclick = () => {
                if (confirm(this.langManager.t('delete_confirm'))) {
                    this.state.questions.splice(index, 1);
                    this.saveState();
                    this.updateModifyList();
                }
            };

            controls.appendChild(editBtn);
            controls.appendChild(delBtn);
            item.appendChild(text);
            item.appendChild(controls);
            this.modifyList.appendChild(item);
        });
    }

    editQuestion(index) {
        this.state.currentEditIndex = index;
        const q = this.state.questions[index];
        this.editQuestionContainer.classList.remove('hidden');
        this.editQuestionText.value = q.text;
        this.editExplanation.value = q.explanation || '';

        this.editAnswersContainer.innerHTML = '';
        // If it's a flashcard, only one option (the back) is relevant for editing.
        // We'll show it as a single answer input.
        if (q.isFlashcard) {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.gap = '10px';
            div.style.marginBottom = '8px';
            div.style.alignItems = 'center';

            const label = document.createElement('label');
            label.textContent = this.langManager.t('flashcard_back_label') + ":";
            label.style.minWidth = '50px';

            const input = document.createElement('input');
            input.type = 'text';
            input.value = q.options[0] || '';
            input.className = 'edit-answer-input';
            input.style.flex = '1';
            input.style.padding = '8px';
            input.style.borderRadius = 'var(--radius-sm)';
            input.style.border = '1px solid var(--border-color)';
            input.style.background = 'var(--input-bg)';
            input.style.color = 'var(--text-color)';

            div.appendChild(label);
            div.appendChild(input);
            this.editAnswersContainer.appendChild(div);
            // Hide radio buttons for flashcards
            this.editAnswersContainer.querySelectorAll('input[type="radio"]').forEach(r => r.style.display = 'none');
        } else {
            q.options.forEach((opt, idx) => {
                const div = document.createElement('div');
                div.style.display = 'flex';
                div.style.gap = '10px';
                div.style.marginBottom = '8px';
                div.style.alignItems = 'center';

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'edit-correct-answer';
                radio.checked = idx === q.correctIndex;
                radio.value = idx;

                const input = document.createElement('input');
                input.type = 'text';
                input.value = opt;
                input.className = 'edit-answer-input';
                input.style.flex = '1';
                input.style.padding = '8px';
                input.style.borderRadius = 'var(--radius-sm)';
                input.style.border = '1px solid var(--border-color)';
                input.style.background = 'var(--input-bg)';
                input.style.color = 'var(--text-color)';

                div.appendChild(radio);
                div.appendChild(input);
                this.editAnswersContainer.appendChild(div);
            });
        }

        this.editQuestionContainer.scrollIntoView({ behavior: 'smooth' });
    }

    saveEdit() {
        if (this.state.currentEditIndex === null) return;
        const q = this.state.questions[this.state.currentEditIndex];
        const newText = this.editQuestionText.value.trim();
        if (!newText) {
            alert(this.langManager.t('error_question_empty'));
            return;
        }

        if (q.isFlashcard) {
            const answerInput = this.editAnswersContainer.querySelector('.edit-answer-input');
            const backText = answerInput.value.trim();
            if (!backText) {
                alert(this.langManager.t('error_flashcard_back_empty'));
                return;
            }
            q.text = newText; // Front
            q.options = [backText]; // Back
            q.correctIndex = 0; // Always 0 for flashcards
            q.explanation = this.editExplanation.value.trim(); // Hint
        } else {
            let correctIndex = -1;
            let validOptionIndex = 0;
            const validOptions = [];

            const rows = this.editAnswersContainer.querySelectorAll('div');
            rows.forEach((row, rawIdx) => {
                const input = row.querySelector('.edit-answer-input');
                const rad = row.querySelector('input[type="radio"]');
                const val = input.value.trim();

                if (val) {
                    validOptions.push(val);
                    if (rad && rad.checked) { // Check if radio exists and is checked
                        correctIndex = validOptionIndex;
                    }
                    validOptionIndex++;
                }
            });

            if (validOptions.length < 2) {
                alert(this.langManager.t('error_min_answers'));
                return;
            }

            if (correctIndex === -1) {
                alert(this.langManager.t('error_correct_invalid'));
                return;
            }

            q.text = newText;
            q.options = validOptions;
            q.correctIndex = correctIndex;
            q.explanation = this.editExplanation.value.trim();
        }

        this.state.questions[this.state.currentEditIndex] = q;
        this.saveState(); // saves current quiz to storage
        this.updateModifyList();
        this.cancelEdit();
    }

    cancelEdit() {
        this.editQuestionContainer.classList.add('hidden');
        this.state.currentEditIndex = null;
    }

    deleteCurrentTest() {
        if (!this.state.currentQuizName) return;
        if (confirm(this.langManager.t('confirm_delete_test') + `"${this.state.currentQuizName}"?`)) {
            delete this.state.quizzes[this.state.currentQuizName];
            StorageManager.saveQuizzes(this.state.quizzes);
            this.initData(); // Reset/Reload
        }
    }

    removeDuplicates() {
        if (!this.state.questions || this.state.questions.length === 0) {
            alert(this.langManager.t('msg_no_questions'));
            return;
        }

        const uniqueQuestions = [];
        const seen = new Set();
        let duplicatesCount = 0;

        this.state.questions.forEach(q => {
            // Create a unique signature based on text and options
            // Normalize text and options to avoid minor whitespace diffs
            const normalizedText = q.text.trim();
            const normalizedOptions = q.options.map(o => o.trim()).join('|||'); // specific separator

            // We could also include explanation or other fields, but usually Question+Answers defines identity.
            const signature = `${normalizedText}___${normalizedOptions}`;

            if (seen.has(signature)) {
                duplicatesCount++;
            } else {
                seen.add(signature);
                uniqueQuestions.push(q);
            }
        });

        if (duplicatesCount > 0) {
            const msg = this.langManager.t('msg_duplicates_found').replace('{count}', duplicatesCount);
            if (confirm(msg)) {
                this.state.questions = uniqueQuestions;
                this.saveState();
                this.updateModifyList();
                const removedMsg = this.langManager.t('msg_duplicates_removed').replace('{count}', duplicatesCount);
                alert(removedMsg);
            }
        } else {
            alert(this.langManager.t('msg_no_duplicates'));
        }
    }

    // --- JSON Logic ---
    downloadJSON() {
        if (!this.state.currentQuizName) {
            alert(this.langManager.t('error_no_quiz_selected'));
            return;
        }
        const name = prompt(this.langManager.t('prompt_filename'), this.state.currentQuizName + '.json');
        if (!name) return;

        const dataStr = JSON.stringify({ questions: this.state.questions }, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", url);
        downloadAnchorNode.setAttribute("download", name.endsWith('.json') ? name : name + '.json');

        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        window.URL.revokeObjectURL(url);
    }

    handleFileUpload(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target.result);
                if (Array.isArray(json.questions)) {
                    // Always import as new test
                    let baseName = file.name.replace('.json', '');
                    let finalName = baseName;
                    let counter = 1;

                    // Ensure unique name
                    while (this.state.quizzes[finalName]) {
                        finalName = `${baseName} (${counter})`;
                        counter++;
                    }

                    this.state.quizzes[finalName] = json.questions;
                    StorageManager.saveQuizzes(this.state.quizzes);

                    this.setActiveQuiz(finalName);
                    this.updateSelectors(); // Update all selectors

                    alert(this.langManager.t('import_success') + ": " + finalName);
                } else {
                    alert(this.langManager.t('error_invalid_json'));
                }
            } catch (err) {
                alert(this.langManager.t('error_parsing_json'));
            }
        };
        reader.readAsText(file);
    }

    clearAllQuestions() {
        if (confirm(this.langManager.t('delete_all_confirm'))) {
            this.state.questions = [];
            this.saveState();
            this.updateModifyList();
            this.updateQuizStartUI();
        }
    }

    // --- Merge Logic ---
    updateMergeList() {
        this.mergeListContainer.innerHTML = '';
        const names = Object.keys(this.state.quizzes);

        if (names.length === 0) {
            this.mergeListContainer.innerHTML = `<p style="text-align:center; padding:1rem;">${this.langManager.t('no_tests_option')}</p>`;
            return;
        }

        names.forEach(name => {
            const count = this.state.quizzes[name].length;
            const div = document.createElement('div');
            div.className = 'modify-item';
            div.innerHTML = `
                <div style="display:flex; gap:0.5rem; align-items:center;">
                    <input type="checkbox" class="merge-checkbox" value="${name}" id="merge-${name}">
                    <label for="merge-${name}" style="cursor:pointer; font-weight:600;">${name}</label>
                </div>
                <span class="badge">${count}</span>
            `;
            this.mergeListContainer.appendChild(div);
        });
    }

    toggleMergeSelection(state) {
        const boxes = this.mergeListContainer.querySelectorAll('.merge-checkbox');
        boxes.forEach(box => box.checked = state);
    }

    createMergedTest() {
        const nameInput = document.getElementById('merge-name-input');
        const name = nameInput.value.trim();

        if (!name) {
            alert(this.langManager.t('error_no_name'));
            return;
        }

        const boxes = this.mergeListContainer.querySelectorAll('.merge-checkbox:checked');
        if (boxes.length === 0) {
            alert(this.langManager.t('error_no_selection'));
            return;
        }

        const selectedNames = Array.from(boxes).map(box => box.value);

        // Validate types
        let hasQuiz = false;
        let hasFlash = false;

        selectedNames.forEach(qName => {
            const questions = this.state.quizzes[qName];
            if (questions && questions.length > 0) {
                if (questions[0].isFlashcard) hasFlash = true;
                else hasQuiz = true;
            }
        });

        if (hasQuiz && hasFlash) {
            alert(this.langManager.t('error_merge_mixed_types'));
            return;
        }

        let mergedQuestions = [];
        selectedNames.forEach(qName => {
            if (this.state.quizzes[qName]) {
                // Deep copy questions to ensure independence i.e. status is reset? 
                // Actually we want fresh status for the new test.
                // We re-generate IDs? No, IDs can be same, but status is part of the question object in state.
                // If we copy the object reference, changing status in one test changes it in the other!
                // CRITICAL: Must deep copy questions.
                const questions = JSON.parse(JSON.stringify(this.state.quizzes[qName]));
                // Reset status logic for new test
                questions.forEach(q => q.status = null);
                mergedQuestions = [...mergedQuestions, ...questions];
            }
        });

        // Save
        // Handle name collision
        let finalName = name;
        if (this.state.quizzes[finalName]) {
            if (!confirm(this.langManager.t('confirm_overwrite') + `"${finalName}"?`)) {
                return;
            }
        }

        this.state.quizzes[finalName] = mergedQuestions;
        StorageManager.saveQuizzes(this.state.quizzes);

        alert(`${this.langManager.t('merge_success')} ${finalName} (${mergedQuestions.length} questions)`);

        // Reset
        nameInput.value = '';
        this.toggleMergeSelection(false);
        this.updateSelectors();

        // Switch to take quiz?
        // this.switchSection('quiz-section');
    }

    // --- Quiz Logic ---
    updateQuizStartUI() {
        if (!this.state.questions || this.state.questions.length === 0) {
            document.getElementById('quiz-status-msg').textContent = this.langManager.t('msg_no_questions');
            this.startBtn.disabled = true;
            this.resetStatsBtn.classList.add('hidden');
        } else {
            const count = this.state.questions.length;
            const answered = this.state.questions.filter(q => q.status !== null).length;
            const correct = this.state.questions.filter(q => q.status === true).length;

            const msg = this.langManager.t('quiz_status_format')
                .replace('{count}', count)
                .replace('{answered}', answered)
                .replace('{correct}', correct);

            document.getElementById('quiz-status-msg').textContent = msg;
            this.startBtn.disabled = false;
            this.resetStatsBtn.classList.remove('hidden');
        }
    }

    startQuiz() {
        let questionsToUse = [];
        if (this.state.mode === 'retry') {
            questionsToUse = this.state.questions.filter(q => q.status === false);
            if (questionsToUse.length === 0) {
                alert(this.langManager.t('error_no_retry'));
                return;
            }
        } else {
            // Shallow copy to avoid mutating original order permanently in state (optional, but safer)
            questionsToUse = [...this.state.questions];
        }

        // Shuffle Questions (Fisher-Yates)
        for (let i = questionsToUse.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questionsToUse[i], questionsToUse[j]] = [questionsToUse[j], questionsToUse[i]];
        }

        this.state.activeQuestions = questionsToUse;
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.streak = 0;
        this.updateStreakUI();

        this.quizStartView.classList.add('hidden');
        this.quizResultsView.classList.add('hidden');
        this.quizActiveView.classList.remove('hidden');
        this.renderQuestion();
    }

    renderQuestion() {
        const q = this.state.activeQuestions[this.state.currentIndex];

        const counterText = this.langManager.t('question_counter_format')
            .replace('{current}', this.state.currentIndex + 1)
            .replace('{total}', this.state.activeQuestions.length);

        this.questionCounter.textContent = counterText;

        // Update Progress Bar
        const progress = ((this.state.currentIndex) / this.state.activeQuestions.length) * 100;
        if (this.progressBar) {
            this.progressBar.style.width = `${progress}%`;
        }

        const scoreText = this.langManager.t('score_format').replace('{score}', this.state.score);
        this.scoreDisplay.textContent = scoreText;

        this.questionText.textContent = q.text;
        this.optionsContainer.innerHTML = '';
        this.feedbackArea.classList.add('hidden');
        this.explanationBox.classList.add('hidden');

        // Prepare options with original indices
        const optionsWithIndex = q.options.map((opt, index) => ({ text: opt, originalIndex: index }));

        // Shuffle options (Fisher-Yates)
        for (let i = optionsWithIndex.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
        }

        optionsWithIndex.forEach((item) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = item.text;
            btn.dataset.originalIndex = item.originalIndex;
            btn.onclick = () => this.handleAnswer(item.originalIndex, btn);
            this.optionsContainer.appendChild(btn);
        });
    }

    handleAnswer(selectedIndex, btnElement) {
        const q = this.state.activeQuestions[this.state.currentIndex];
        const isCorrect = selectedIndex === q.correctIndex;

        const allOpts = this.optionsContainer.querySelectorAll('.quiz-option');
        allOpts.forEach(b => b.classList.add('disabled'));

        if (isCorrect) {
            btnElement.classList.add('correct');
            this.state.score++;

            this.state.streak++;
            this.triggerStreakAnim();
        } else {
            this.state.streak = 0; // Reset streak
            btnElement.classList.add('incorrect');
            // Find correct button based on original index
            const allOptsArr = Array.from(allOpts);
            const correctBtn = allOptsArr.find(b => parseInt(b.dataset.originalIndex) === q.correctIndex);
            if (correctBtn) correctBtn.classList.add('correct');

            if (q.explanation && q.explanation.trim() !== "") {
                this.explanationText.textContent = q.explanation;
                this.explanationBox.classList.remove('hidden');
            }
        }

        // Global Update
        const mainQIndex = this.state.questions.findIndex(mq => mq.id === q.id);
        if (mainQIndex !== -1) {
            this.state.questions[mainQIndex].status = isCorrect;
            this.saveState();
        }

        this.feedbackArea.classList.remove('hidden');
        this.feedbackMsg.textContent = isCorrect
            ? this.langManager.t('correct_msg')
            : this.langManager.t('incorrect_msg');

        this.updateStreakUI();
    }

    nextQuestion() {
        this.state.currentIndex++;
        if (this.state.currentIndex < this.state.activeQuestions.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.quizActiveView.classList.add('hidden');
        this.quizResultsView.classList.remove('hidden');
        const score = this.state.score;
        const total = this.state.activeQuestions.length;
        const percent = total > 0 ? ((score / total) * 100).toFixed(2) : "0.00";

        const scoreText = this.langManager.t('score_text').replace('{percent}', percent);
        this.finalScore.innerHTML = scoreText;

        // Color Logic
        const pVal = parseFloat(percent);
        let colorVar = 'var(--success)'; // > 70%
        if (pVal < 50) {
            colorVar = 'var(--error)';
        } else if (pVal <= 70) {
            colorVar = 'var(--warning)';
        }

        const circle = this.quizResultsView.querySelector('.score-circle');
        if (circle) {
            circle.style.borderColor = colorVar;
            const highlight = this.finalScore.querySelector('.score-highlight');
            if (highlight) highlight.style.color = colorVar;
        }

        const hasFailures = this.state.questions.some(q => q.status === false);
        this.retryFailedBtn.className = hasFailures ? "btn-primary" : "btn-primary hidden";

        this.updateQuizStartUI();
    }

    updateStreakUI() {
        if (!this.streakDisplay) return;

        if (this.state.streak > 1) {
            this.streakDisplay.classList.remove('hidden');
            this.streakDisplay.textContent = `🔥 ${this.state.streak}`;
        } else {
            this.streakDisplay.classList.add('hidden');
        }
    }

    triggerStreakAnim() {
        if (!this.streakDisplay) return;
        this.streakDisplay.classList.remove('fire-pulse');
        void this.streakDisplay.offsetWidth; // trigger reflow
        this.streakDisplay.classList.add('fire-pulse');
    }

    // --- Flashcard Logic ---

    createFlashDeck() {
        const mode = document.querySelector('input[name="flash-creation-mode"]:checked').value;
        let name;

        if (mode === 'new') {
            name = this.flashDeckName.value.trim();
            if (!name) {
                alert(this.langManager.t('error_no_name'));
                return;
            }
            if (this.state.quizzes[name]) {
                if (!confirm(this.langManager.t('confirm_overwrite') + `"${name}"?`)) return;
            }
        } else {
            name = this.existingFlashSelect.value;
            if (!name) {
                alert(this.langManager.t('error_select_existing'));
                return;
            }
        }

        const text = this.flashRawInput.value.trim();
        if (!text) {
            alert(this.langManager.t('error_flash_empty'));
            return;
        }

        const lines = text.split('\n').filter(line => line.trim() !== '');
        const cards = [];

        for (let line of lines) {
            const parts = line.split('|');
            if (parts.length < 2) {
                alert(this.langManager.t('error_flash_format'));
                return;
            }

            // Support simple format: Front | Back | Optional Hint
            const front = parts[0].trim();
            const back = parts[1].trim();
            const hint = parts.length > 2 ? parts.slice(2).join('|').trim() : "";

            cards.push({
                id: crypto.randomUUID(),
                text: front,
                options: [back], // Store back as option 0
                correctIndex: 0,
                explanation: hint, // Reuse explanation field for Hint in flashcard mode
                status: null,
                isFlashcard: true
            });
        }

        if (cards.length === 0) {
            alert(this.langManager.t('error_flash_format_hint'));
            return;
        }

        if (mode === 'new') {
            this.state.quizzes[name] = cards;
            alert(this.langManager.t('flash_deck_created') + name);
        } else {
            this.state.quizzes[name] = this.state.quizzes[name].concat(cards);
            alert(this.langManager.t('save_success'));
        }

        StorageManager.saveQuizzes(this.state.quizzes);

        this.flashDeckName.value = '';
        this.flashRawInput.value = '';
        this.updateSelectors(); // Use general updateSelectors
    }

    downloadFlashDeck() {
        const deckName = this.flashcardQuizSelect.value;
        if (!deckName) {
            alert(this.langManager.t('error_no_quiz_selected'));
            return;
        }

        // We wrap questions in { questions: [...] } to match standard format
        const dataStr = JSON.stringify({ questions: this.state.quizzes[deckName] }, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", url);
        downloadAnchorNode.setAttribute("download", deckName + ".json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        window.URL.revokeObjectURL(url);
    }

    startFlashSession(retryMode = false) {
        let deckName = this.flashcardQuizSelect.value;
        if (!deckName && !retryMode) return;
        // If retryMode, we use current `deckName` from last session? Or just assume current active cards.

        // Actually, let's keep it simple.
        if (retryMode) {
            // Filter missed from CURRENT active session if possible?
            // Or from the state.activeQuestions which holds the last session
            let missed = this.state.activeQuestions.filter(q => q.status === false);
            if (missed.length === 0) {
                alert(this.langManager.t('error_no_retry'));
                return;
            }
            this.state.flashQueue = [...missed];
        } else {
            if (!deckName) return;
            const originalDeck = this.state.quizzes[deckName];
            // Filter only valid cards? (Text + Options[0] or Text + Explanation)
            // For standard quiz questions: Front = text, Back = Options[Correct] + Explanation
            // For purely flashcard: Front = text, Back = Options[0]

            this.state.flashQueue = originalDeck.map(q => {
                let backText = "";
                let hintText = "";

                if (q.isFlashcard) {
                    backText = q.options[0];
                    hintText = q.explanation || ""; // We stored hint in explanation
                } else {
                    // Quiz question recycling
                    backText = q.options[q.correctIndex || 0];
                    if (q.explanation) {
                        // For normal quizzes, explanation IS the explanation shown *after* answer.
                        // Maybe we can treat it as back text addition, or hint?
                        // User requested hint "before" flipping. Normal quizzes don't have "hints".
                        // So we leave hint empty for normal quizzes, and show explanation on back.
                        backText += `\n\n(${q.explanation})`;
                    }
                }

                return {
                    id: q.id,
                    front: q.text,
                    back: backText,
                    hint: hintText,
                    status: null
                };
            });
            // Shuffle only if toggle is checked
            if (this.flashShuffleToggle && this.flashShuffleToggle.checked) {
                for (let i = this.state.flashQueue.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [this.state.flashQueue[i], this.state.flashQueue[j]] = [this.state.flashQueue[j], this.state.flashQueue[i]];
                }
            }
            // Save references to original questions to update global analytics if we wanted?
            // For now, flashcard session is ephemeral "status".
            // We can map back to state.activeQuestions for consistency in logic
            this.state.activeQuestions = this.state.flashQueue; // Abuse this common state 
        }

        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.streak = 0; // Setup streak for flashcards

        this.updateFlashStatsUI(); // Initial UI update

        // Show Active View
        this.flashcardSetupView.classList.add('hidden');
        this.flashcardResultsView.classList.add('hidden');
        this.flashcardActiveView.classList.remove('hidden');

        this.renderFlashCard();
    }

    renderFlashCard() {
        const card = this.state.activeQuestions[this.state.currentIndex];
        // Counter now handled in updateFlashStatsUI or here? 
        // Let's keep counter text here, but progress bar in StatsUI
        this.flashCounter.innerText = `${this.state.currentIndex + 1}/${this.state.activeQuestions.length}`;
        this.updateFlashStatsUI();

        this.flashFrontText.innerText = card.front;
        this.flashBackText.innerText = card.back;

        // Hint Logic
        if (card.hint) {
            this.flashHintContainer.classList.remove('hidden');
            this.flashHintText.innerText = card.hint;
            this.flashHintText.classList.add('hidden'); // Hide text initially
            this.flashHintBtn.classList.remove('hidden'); // Show button
        } else {
            this.flashHintContainer.classList.add('hidden');
        }

        // Reset Flip
        this.flashCardElement.classList.remove('flipped');
        this.flashControls.classList.remove('visible'); // Hide buttons

        // One-time Flip Listener setup?
        // Better done in bindEvents but we need to control the flow here.
        // Actually, click on card -> flip -> show buttons.
    }

    flipCard() {
        this.flashCardElement.classList.toggle('flipped');
        if (this.flashCardElement.classList.contains('flipped')) {
            this.flashControls.classList.add('visible');
        } else {
            this.flashControls.classList.remove('visible');
        }
    }

    handleFlashResponse(success) {
        const card = this.state.activeQuestions[this.state.currentIndex];
        card.status = success; // Mark success/fail

        if (success) {
            this.state.score++;
            this.state.streak++;
            this.triggerFlashStreakAnim();
        } else {
            this.state.streak = 0;
        }

        // Next
        this.state.currentIndex++;
        if (this.state.currentIndex < this.state.activeQuestions.length) {
            this.renderFlashCard();
        } else {
            this.showFlashResults();
        }
    }

    updateFlashStatsUI() {
        // Progress Bar
        if (this.flashProgressBar) {
            const progress = ((this.state.currentIndex) / this.state.activeQuestions.length) * 100;
            this.flashProgressBar.style.width = `${progress}%`;
        }

        // Streak
        if (this.flashStreakDisplay) {
            if (this.state.streak > 1) {
                this.flashStreakDisplay.classList.remove('hidden');
                this.flashStreakDisplay.textContent = `🔥 ${this.state.streak}`;
            } else {
                this.flashStreakDisplay.classList.add('hidden');
            }
        }
    }

    triggerFlashStreakAnim() {
        if (!this.flashStreakDisplay) return;
        this.flashStreakDisplay.classList.remove('fire-pulse');
        void this.flashStreakDisplay.offsetWidth;
        this.flashStreakDisplay.classList.add('fire-pulse');
    }

    showFlashResults() {
        this.flashcardActiveView.classList.add('hidden');
        this.flashcardResultsView.classList.remove('hidden');

        const total = this.state.activeQuestions.length;
        const score = this.state.score;
        const percent = total > 0 ? Math.round((score / total) * 100) : 0;

        const scoreEl = document.getElementById('flash-final-score');
        const labelEl = document.getElementById('flash-score-label');
        if (scoreEl) scoreEl.innerText = `${percent}%`;
        if (labelEl) labelEl.innerText = this.langManager.t('flash_retained');

        // Color Logic similar to quiz
        const circle = this.flashcardResultsView.querySelector('.score-circle');
        if (circle) {
            let colorVar = 'var(--success)';
            if (percent < 50) colorVar = 'var(--error)';
            else if (percent <= 70) colorVar = 'var(--warning)';
            circle.style.borderColor = colorVar;
            if (scoreEl) scoreEl.style.color = colorVar;
        }
    }

    bindFlashEvents() {
        this.createFlashDeckBtn.addEventListener('click', () => this.createFlashDeck());
        this.startFlashBtn.addEventListener('click', () => this.startFlashSession(false));

        this.flashCardElement.addEventListener('click', (e) => {
            // Check if clicking hint button
            if (e.target.id === 'flash-hint-btn') {
                e.stopPropagation(); // Don't flip
                this.flashHintText.classList.toggle('hidden');
                return;
            }
            this.flipCard();
        });

        this.flashPassBtn.addEventListener('click', (e) => { e.stopPropagation(); this.handleFlashResponse(true); });
        this.flashFailBtn.addEventListener('click', (e) => { e.stopPropagation(); this.handleFlashResponse(false); });

        this.exitFlashBtn.addEventListener('click', () => {
            this.flashcardActiveView.classList.add('hidden');
            this.flashcardSetupView.classList.remove('hidden');
        });

        this.flashRetryBtn.addEventListener('click', () => this.startFlashSession(true));
        this.flashRestartBtn.addEventListener('click', () => this.startFlashSession(false)); // Just restarts same deck? No, restart session needs to re-fetch? 
        // Actually restart all meant re-shuffle and retain full deck.
        // My startFlashSession(false) logic re-reads select. If it's a retry session, the select might remain.
        // Let's modify startFlashSession to handle "restart current set" better. 
        // For simplicity:
        this.flashRestartBtn.onclick = () => {
            // Reset current set
            this.state.activeQuestions.forEach(q => q.status = null);
            // Shuffle again
            for (let i = this.state.activeQuestions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.state.activeQuestions[i], this.state.activeQuestions[j]] = [this.state.activeQuestions[j], this.state.activeQuestions[i]];
            }
            this.state.currentIndex = 0;
            this.state.score = 0;
            this.flashcardResultsView.classList.add('hidden');
            this.flashcardActiveView.classList.remove('hidden');
            this.renderFlashCard();
        };

        this.flashDownloadBtn.addEventListener('click', () => this.downloadFlashDeck());
        this.flashUploadBtn.addEventListener('click', () => this.flashUploadInput.click());
        this.flashUploadInput.addEventListener('change', (e) => this.handleFileUpload(e));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new QuizApp();
});
