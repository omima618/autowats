const tooltips = document.querySelectorAll(".review");
const clients = document.querySelectorAll(".client-img");
const hideTooltip = function () {
    tooltips.forEach((tooltip) => tooltip.classList.add("hidden"));
};
document.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("client-img") ||
        e.target.parentElement.classList.contains("client-img")
    ) {
        const parentEle = e.target.classList.contains("client-img")
            ? e.target
            : e.target.parentElement;
        const toolTip = parentEle.querySelector(".review");
        if (!toolTip.classList.contains("hidden"))
            toolTip.classList.add("hidden");
        hideTooltip();
        if (toolTip.classList.contains("hidden"))
            toolTip.classList.remove("hidden");
    } else return;
});
// onmouseleave client div hide tooltip
clients.forEach((client) => {
    client.addEventListener("mouseleave", () => {
        hideTooltip();
    });
});
// on reclick hide tooltip
// document.addEventListener("click", (e) => {
//     if (
//         e.target.classList.contains("client-img") ||
//         e.target.parentElement.classList.contains("client-img")
//     )
//         return;
//     hideTooltip();
// });
