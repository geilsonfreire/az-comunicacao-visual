// =============================================
// WhatsApp Tooltip (ciclo temporizado)
// =============================================

if (!window.__whatsappTooltipCycleInitialized) {

    window.__whatsappTooltipCycleInitialized = true

    const tooltips = document.querySelectorAll(".whatsapp-tooltip")
    const whatsappBtn = document.querySelector(".whatsapp-btn")

    const INITIAL_DELAY_MS = 5000
    const VISIBLE_MS = 5000
    const HIDDEN_MS = 10000
    const MAX_CYCLES = 3

    let cycles = 0
    let stopped = false


    const showTooltips = () => {

        if (stopped) return

        tooltips.forEach(t => t.classList.add("show"))

    }


    const hideTooltips = () => {

        tooltips.forEach(t => t.classList.remove("show"))

    }


    const runCycle = () => {

        if (cycles >= MAX_CYCLES || stopped) return

        showTooltips()

        setTimeout(() => {

            hideTooltips()
            cycles++

            if (cycles < MAX_CYCLES && !stopped) {

                setTimeout(runCycle, HIDDEN_MS)

            }

        }, VISIBLE_MS)

    }


    setTimeout(runCycle, INITIAL_DELAY_MS)



    // =============================================
    // Clique no botão → parar tooltip
    // =============================================

    if (whatsappBtn) {

        whatsappBtn.addEventListener("click", () => {

            stopped = true
            hideTooltips()

        })

    }

    const whatsappChat = document.querySelector(".whatsapp-chat")
    const chatClose = document.querySelector(".chat-close")

    if (whatsappBtn && whatsappChat) {

        whatsappBtn.addEventListener("click", () => {

            stopped = true
            hideTooltips()

            whatsappChat.classList.toggle("show")

        })

    }

    if (chatClose) {

        chatClose.addEventListener("click", () => {

            whatsappChat.classList.remove("show")

        })

    }

}