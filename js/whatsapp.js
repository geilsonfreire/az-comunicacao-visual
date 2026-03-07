// =============================================
// Buttom WhatsApp com Tooltip (ciclo temporizado)
// =============================================
if (!window.__whatsappTooltipCycleInitialized) {
    window.__whatsappTooltipCycleInitialized = true;

    const tooltips = document.querySelectorAll(".whatsapp-tooltip");
    const INITIAL_DELAY_MS = 5000;
    const VISIBLE_MS = 5000;
    const HIDDEN_MS = 10000;
    const MAX_CYCLES = 3;

    if (tooltips.length > 0) {
        let cycles = 0;

        const showTooltips = () => {
            tooltips.forEach((tooltip) => tooltip.classList.add("show"));
        };

        const hideTooltips = () => {
            tooltips.forEach((tooltip) => tooltip.classList.remove("show"));
        };

        const runCycle = () => {
            if (cycles >= MAX_CYCLES) {
                return;
            }

            showTooltips();

            setTimeout(() => {
                hideTooltips();
                cycles += 1;

                if (cycles < MAX_CYCLES) {
                    setTimeout(runCycle, HIDDEN_MS);
                }
            }, VISIBLE_MS);
        };

        setTimeout(runCycle, INITIAL_DELAY_MS);
    }
}
