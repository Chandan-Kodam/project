document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hero-title", { opacity: 1, y: -20, duration: 1, ease: "power2.out" });
    gsap.to(".hero-subtitle", { opacity: 1, y: -10, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.to(".hero-button", { opacity: 1, y: -10, duration: 1, delay: 1, ease: "power2.out" });
});

document.querySelectorAll(".image-container").forEach(container => {
    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(container, { x: x * 10, y: y * 10, duration: 0.3 });
    });
    container.addEventListener("mouseleave", () => {
        gsap.to(container, { x: 0, y: 0, duration: 0.3 });
    });
});