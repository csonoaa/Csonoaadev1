function showText(hexagon) {
    const text = hexagon.getAttribute('data-text');
    const tooltip = document.getElementById('tooltip');

    // Display the tooltip near the clicked hexagon
    tooltip.textContent = text;
    const rect = hexagon.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    tooltip.style.top = `${rect.top + window.scrollY - rect.height / 2}px`;
    tooltip.style.display = 'block';

    // Hide tooltip on mouse out
    hexagon.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
}
