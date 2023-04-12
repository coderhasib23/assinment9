import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="h-20 lg:h-40 bg-background-imh1 bg-blue-100 bg-no-repeat">
        <h1 className="py-[5%] text-4xl font-semibold text-center">Blog</h1>
      </div>
      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-gray-800">
          <h2 class="text-3xl font-bold mb-6 pl-6">Question Answers</h2>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingOne">
                <button
                  class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  When should we use Context API?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse border-0 collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body py-4 px-5 text-gray-500">
                  The Context API in React should be used when you have data or
                  state that needs to be shared across many components or when
                  you have complex component hierarchies. It can also be useful
                  for optimizing performance, but it's important to be mindful
                  of performance concerns when using the Context API. However,
                  it's not recommended to use it for every piece of state in
                  your application, as it can potentially add unnecessary
                  complexity.
                </div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What is Custom Hook?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse border-0 collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body py-4 px-5 text-gray-500">
                  In React, a custom hook is a JavaScript function that utilizes
                  the existing React hooks - such as useState, useEffect,
                  useContext, etc. to encapsulate a specific piece of logic that
                  can be reused across multiple components. Custom hooks allow
                  you to extract and reuse stateful logic without duplicating
                  code or relying on higher-order components or render props.
                  Custom hooks can be created and used just like built-in hooks,
                  and can be shared across components or even across projects.
                </div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingThree">
                <button
                  class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What is useRef?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body py-4 px-5 text-gray-500">
                  useRef is a React hook that returns a mutable ref object,
                  allowing access and updates to a value that persists across
                  re-renders without causing them. This can be used to reference
                  DOM elements or store mutable data.
                </div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingThree">
                <button
                  class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What is useMemo?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body py-4 px-5 text-gray-500">
                  useMemo is a React hook that memoizes a function or value,
                  allowing it to be cached and reused only when its dependencies
                  have changed. This can help optimize performance by avoiding
                  unnecessary calculations or re-renders.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
