const currentPage = window.location.pathname;

const navLinks = document.querySelectorAll("nav a");

for (const link of navLinks) {
    if (isCurrentPage(link)) {
        link.classList.add("active-link");
    }
}

function isCurrentPage(link) {
    const linkHref = link.getAttribute("href");

    if (currentPage === "/") {
        return linkHref === "/index.html";
    }

    return linkHref === currentPage;
}
