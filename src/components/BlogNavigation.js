import React from "react";

function BlogNavigation() {
  return (
    <div>
        <div class="dropdown">
              <button
                class="btn blog-navigation-dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Blog Type
              </button>
              <ul class="dropdown-menu dm">
                <li>
                  <a class="dropdown-item" href="/food">
                    Food
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/tech">
                    Tech
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/marketing">
                    Marketing
                  </a>
                </li>
              </ul>
              </div>
    </div>
  );
}

export default BlogNavigation;
