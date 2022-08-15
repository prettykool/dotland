/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function GitHub(props: { class?: string }) {
  return (
    <svg
      class={tw`h-6 w-6 ${props.class ?? ""}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Discord(props: { class?: string }) {
  return (
    <svg
      class={tw`h-6 w-6 ${props.class ?? ""}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4a8.18 8.18 0 001.8.536c.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />
    </svg>
  );
}

export function Twitter(props: { class?: string }) {
  return (
    <svg
      class={tw`h-6 w-6 ${props.class ?? ""}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );
}

export function Error() {
  return (
    <svg
      class={tw`h-5 w-5 text-red-400`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Folder() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      class={tw`w-6 h-6 text-gray-400 inline-block mr-2`}
    >
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z">
      </path>
    </svg>
  );
}

export function OpenBook(props: { class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={tw`h-5 w-5 ${props.class ?? ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  );
}

export function LightOpenBook() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      class={tw`w-6 h-6 text-gray-400 inline-block mr-2`}
    >
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z">
      </path>
    </svg>
  );
}

export function Code() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function Page() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function Cross(props: { class?: string }) {
  return (
    <svg
      class={tw`h-6 w-6 ${props.class ?? ""}`}
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function ArrowLeft() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 2L4.5 7L9.5 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ArrowRight(props: { class?: string }) {
  return (
    <svg
      class={tw(props.class ?? "")}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M4.5 12L9.5 7L4.5 2"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function TriangleRight(props: { class?: string }) {
  return (
    <svg
      class={tw(props.class ?? "")}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <path d="M2.5 10L7.5 5L2.5 0V10Z" fill="currentColor" />
    </svg>
  );
}

export function Globe() {
  return (
    <svg
      class={tw`h-6 w-6`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      {" "}
    </svg>
  );
}

export function Instagram() {
  return (
    <svg class={tw`h-6 w-6`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

export function MagnifyingGlass(props: { class?: string }) {
  return (
    <svg
      class={tw`h-5 w-5 ${props.class ?? ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M14.2716 13.1684L11.3313 10.2281C12.0391 9.28573 12.4213 8.13865 12.42 6.96C12.42 3.94938 9.97062 1.5 6.96 1.5C3.94938 1.5 1.5 3.94938 1.5 6.96C1.5 9.97062 3.94938 12.42 6.96 12.42C8.13865 12.4213 9.28573 12.0391 10.2281 11.3313L13.1684 14.2716C13.3173 14.4046 13.5114 14.4756 13.711 14.47C13.9105 14.4645 14.1004 14.3827 14.2415 14.2415C14.3827 14.1004 14.4645 13.9105 14.47 13.711C14.4756 13.5114 14.4046 13.3173 14.2716 13.1684ZM3.06 6.96C3.06 6.18865 3.28873 5.43463 3.71727 4.79328C4.14581 4.15192 4.7549 3.65205 5.46753 3.35687C6.18017 3.06169 6.96433 2.98446 7.72085 3.13494C8.47738 3.28542 9.17229 3.65686 9.71772 4.20228C10.2631 4.74771 10.6346 5.44262 10.7851 6.19915C10.9355 6.95567 10.8583 7.73983 10.5631 8.45247C10.2679 9.1651 9.76808 9.77419 9.12672 10.2027C8.48537 10.6313 7.73135 10.86 6.96 10.86C5.92604 10.8588 4.93478 10.4475 4.20365 9.71635C3.47253 8.98522 3.06124 7.99396 3.06 6.96Z" />
    </svg>
  );
}

export function Clock() {
  return (
    <svg
      class={tw`w-5 h-5 text-gray-500`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function Reload() {
  return (
    <svg
      class={tw`w-5 h-5 text-yellow-400`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

export function Checkmark() {
  return (
    <svg
      class={tw`w-5 h-5 text-green-500`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function WarningTriangle() {
  return (
    <svg
      class={tw`w-5 h-5 text-red-500`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

export function Menu(props: { title?: string }) {
  return (
    <svg
      class={tw`h-6 w-6`}
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      {props.title && <title>{props.title}</title>}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  );
}

export function Star(props: { class?: string; title?: string }) {
  return (
    <svg
      class={tw`w-5 h-5 ${props.class ?? ""}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
      </path>
    </svg>
  );
}

export function Tag(props: { title?: string }) {
  return (
    <svg
      class={tw`h-5 w-5 mr-2 inline text-gray-700`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function File() {
  return (
    <svg
      class={tw`m-2`}
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
    >
      <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#6C6E78" />
    </svg>
  );
}

export function NameTag() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_935_1392)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.5 8.275V3.25C2.5 3.1837 2.52634 3.12011 2.57322 3.07322C2.62011 3.02634 2.6837 3 2.75 3H7.775C7.80785 2.99994 7.84039 3.00636 7.87077 3.01888C7.90114 3.03141 7.92874 3.0498 7.952 3.073L14.202 9.323C14.2253 9.34622 14.2438 9.37381 14.2564 9.40418C14.269 9.43456 14.2754 9.46712 14.2754 9.5C14.2754 9.53288 14.269 9.56544 14.2564 9.59582C14.2438 9.62619 14.2253 9.65378 14.202 9.677L9.177 14.702C9.15378 14.7253 9.12619 14.7438 9.09582 14.7564C9.06544 14.769 9.03288 14.7754 9 14.7754C8.96712 14.7754 8.93456 14.769 8.90418 14.7564C8.87381 14.7438 8.84622 14.7253 8.823 14.702L2.573 8.452C2.5498 8.42874 2.53141 8.40114 2.51888 8.37077C2.50636 8.34039 2.49994 8.30785 2.5 8.275ZM1 8.275V3.25C1 2.284 1.784 1.5 2.75 1.5H7.775C8.239 1.5 8.685 1.684 9.013 2.013L15.263 8.263C15.5909 8.59115 15.7751 9.03609 15.7751 9.5C15.7751 9.96391 15.5909 10.4088 15.263 10.737L10.237 15.763C9.90885 16.0909 9.46391 16.2751 9 16.2751C8.53609 16.2751 8.09115 16.0909 7.763 15.763L1.513 9.513C1.35035 9.35047 1.22133 9.15747 1.1333 8.94505C1.04528 8.73263 0.999983 8.50494 1 8.275ZM6 5.5C5.73478 5.5 5.48043 5.60536 5.29289 5.79289C5.10536 5.98043 5 6.23478 5 6.5C5 6.76522 5.10536 7.01957 5.29289 7.20711C5.48043 7.39464 5.73478 7.5 6 7.5C6.26522 7.5 6.51957 7.39464 6.70711 7.20711C6.89464 7.01957 7 6.76522 7 6.5C7 6.23478 6.89464 5.98043 6.70711 5.79289C6.51957 5.60536 6.26522 5.5 6 5.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_935_1392">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Gear() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_935_1394)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.42897 2.025C7.80892 1.99197 8.19102 1.99197 8.57097 2.025C8.60697 2.028 8.67897 2.061 8.70797 2.171L8.99697 3.276C9.14397 3.836 9.54697 4.243 9.99397 4.465C10.168 4.551 10.335 4.648 10.495 4.755C10.912 5.033 11.465 5.178 12.025 5.025L13.127 4.722C13.237 4.692 13.302 4.738 13.322 4.768C13.541 5.078 13.732 5.409 13.895 5.757C13.909 5.788 13.917 5.867 13.836 5.947L13.021 6.753C12.61 7.159 12.459 7.71 12.491 8.209C12.5033 8.4028 12.5033 8.5972 12.491 8.791C12.459 9.29 12.61 9.841 13.021 10.247L13.836 11.053C13.916 11.133 13.909 11.212 13.895 11.243C13.7335 11.5892 13.5417 11.9205 13.322 12.233C13.302 12.262 13.236 12.307 13.127 12.278L12.024 11.975C11.465 11.822 10.912 11.967 10.495 12.245C10.335 12.352 10.168 12.449 9.99497 12.535C9.54597 12.757 9.14397 13.163 8.99697 13.724L8.70797 14.829C8.67897 14.939 8.60697 14.972 8.57097 14.975C8.19101 15.0079 7.80892 15.0079 7.42897 14.975C7.39297 14.972 7.32097 14.938 7.29197 14.829L7.00297 13.724C6.85597 13.164 6.45297 12.757 6.00597 12.535C5.83292 12.4492 5.66557 12.3523 5.50497 12.245C5.08797 11.967 4.53497 11.822 3.97497 11.975L2.87297 12.278C2.76297 12.308 2.69797 12.262 2.67797 12.232C2.45826 11.9198 2.26652 11.5889 2.10497 11.243C2.09097 11.212 2.08297 11.133 2.16397 11.053L2.97897 10.247C3.38997 9.841 3.54097 9.29 3.50897 8.791C3.49665 8.5972 3.49665 8.4028 3.50897 8.209C3.54097 7.71 3.38997 7.159 2.97897 6.753L2.16397 5.947C2.08397 5.867 2.09097 5.788 2.10497 5.757C2.26622 5.41066 2.45798 5.07935 2.67797 4.767C2.69797 4.738 2.76397 4.692 2.87297 4.722L3.97597 5.025C4.53497 5.178 5.08797 5.033 5.50497 4.755C5.66497 4.648 5.83197 4.551 6.00497 4.465C6.45397 4.243 6.85597 3.837 7.00297 3.276L7.29197 2.171C7.32097 2.061 7.39297 2.028 7.42897 2.025ZM7.99997 0.5C7.76397 0.5 7.52997 0.51 7.29897 0.53C6.55597 0.595 6.00897 1.145 5.84097 1.791L5.55097 2.897C5.53397 2.963 5.47297 3.055 5.33997 3.121C5.10924 3.23519 4.88611 3.36412 4.67197 3.507C4.54897 3.589 4.43897 3.597 4.37197 3.578L3.26997 3.276C2.62597 3.099 1.87797 3.296 1.44997 3.906C1.17994 4.29016 0.944358 4.6974 0.745968 5.123C0.430968 5.798 0.634968 6.545 1.10897 7.014L1.92397 7.82C1.97397 7.868 2.02197 7.967 2.01197 8.114C1.99563 8.37107 1.99563 8.62893 2.01197 8.886C2.02197 9.033 1.97397 9.132 1.92397 9.18L1.10897 9.986C0.634968 10.455 0.430968 11.202 0.745968 11.877C0.945968 12.305 1.18197 12.712 1.44997 13.095C1.87797 13.704 2.62597 13.901 3.26997 13.725L4.37297 13.422C4.43897 13.403 4.54897 13.411 4.67197 13.493C4.88497 13.636 5.10797 13.765 5.33997 13.879C5.47297 13.945 5.53397 14.037 5.55197 14.103L5.84097 15.209C6.00997 15.855 6.55597 16.405 7.29897 16.469C7.76542 16.5096 8.23451 16.5096 8.70097 16.469C9.44397 16.405 9.99097 15.855 10.159 15.209L10.449 14.103C10.466 14.037 10.527 13.945 10.66 13.879C10.8907 13.7648 11.1138 13.6359 11.328 13.493C11.451 13.411 11.561 13.403 11.628 13.422L12.73 13.724C13.374 13.901 14.122 13.704 14.55 13.094C14.818 12.712 15.055 12.305 15.254 11.877C15.569 11.202 15.365 10.455 14.89 9.986L14.076 9.18C14.026 9.132 13.978 9.033 13.988 8.886C14.0043 8.62892 14.0043 8.37108 13.988 8.114C13.978 7.967 14.027 7.868 14.076 7.82L14.89 7.014C15.365 6.545 15.569 5.798 15.254 5.123C15.0556 4.6971 14.82 4.28952 14.55 3.905C14.122 3.296 13.374 3.099 12.73 3.275L11.627 3.578C11.561 3.597 11.451 3.589 11.328 3.507C11.1138 3.36411 10.8907 3.23518 10.66 3.121C10.527 3.055 10.466 2.963 10.448 2.897L10.16 1.79C9.98997 1.145 9.44397 0.595 8.70097 0.531C8.46786 0.510538 8.23397 0.500195 7.99997 0.5V0.5ZM9.49997 8.5C9.49997 8.89782 9.34193 9.27936 9.06063 9.56066C8.77932 9.84196 8.39779 10 7.99997 10C7.60214 10 7.22061 9.84196 6.93931 9.56066C6.658 9.27936 6.49997 8.89782 6.49997 8.5C6.49997 8.10218 6.658 7.72064 6.93931 7.43934C7.22061 7.15804 7.60214 7 7.99997 7C8.39779 7 8.77932 7.15804 9.06063 7.43934C9.34193 7.72064 9.49997 8.10218 9.49997 8.5ZM11 8.5C11 9.29565 10.6839 10.0587 10.1213 10.6213C9.55868 11.1839 8.79562 11.5 7.99997 11.5C7.20432 11.5 6.44126 11.1839 5.87865 10.6213C5.31604 10.0587 4.99997 9.29565 4.99997 8.5C4.99997 7.70435 5.31604 6.94129 5.87865 6.37868C6.44126 5.81607 7.20432 5.5 7.99997 5.5C8.79562 5.5 9.55868 5.81607 10.1213 6.37868C10.6839 6.94129 11 7.70435 11 8.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_935_1394">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Webhook() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_935_1388)">
        <path
          d="M5.50024 4.74997C5.50024 4.15324 5.73729 3.58094 6.15925 3.15898C6.5812 2.73703 7.1535 2.49997 7.75024 2.49997C8.34697 2.49997 8.91927 2.73703 9.34123 3.15898C9.76318 3.58094 10.0002 4.15324 10.0002 4.74997C10.0002 4.94889 10.0793 5.13965 10.2199 5.2803C10.3606 5.42096 10.5513 5.49997 10.7502 5.49997C10.9491 5.49997 11.1399 5.42096 11.2806 5.2803C11.4212 5.13965 11.5002 4.94889 11.5002 4.74997C11.5004 4.11828 11.3409 3.49679 11.0367 2.94318C10.7324 2.38958 10.2933 1.9218 9.75994 1.58326C9.22662 1.24472 8.61642 1.0464 7.98598 1.00669C7.35553 0.966975 6.72527 1.08717 6.15368 1.35611C5.5821 1.62505 5.08772 2.03403 4.71642 2.54508C4.34512 3.05614 4.10893 3.6527 4.02979 4.27942C3.95064 4.90614 4.03109 5.5427 4.26368 6.13001C4.49627 6.71733 4.87346 7.23637 5.36024 7.63897L3.08824 11.897C2.99462 12.0725 2.97457 12.2781 3.03252 12.4685C3.09047 12.6588 3.22166 12.8184 3.39724 12.912C3.57281 13.0056 3.77838 13.0256 3.96873 12.9677C4.15908 12.9097 4.31862 12.7785 4.41224 12.603L7.00024 7.74997C7.04662 7.66305 7.07543 7.56783 7.085 7.46976C7.09458 7.3717 7.08474 7.27271 7.05604 7.17845C7.02735 7.08419 6.98036 6.99651 6.91776 6.92041C6.85517 6.84432 6.77819 6.78131 6.69124 6.73497C6.33149 6.54307 6.03065 6.25702 5.82088 5.90739C5.6111 5.55776 5.50027 5.15771 5.50024 4.74997Z"
          fill="white"
        />
        <path
          d="M7.36439 4.10703C7.44887 4.05618 7.54255 4.0225 7.64007 4.0079C7.73758 3.9933 7.83702 3.99807 7.93268 4.02194C8.02835 4.04581 8.11837 4.08831 8.1976 4.14701C8.27682 4.20571 8.3437 4.27946 8.39439 4.36403L11.0024 8.71303C11.5955 8.50406 12.2317 8.4476 12.8523 8.54885C13.473 8.65011 14.0582 8.90582 14.5541 9.29246C15.0501 9.6791 15.4409 10.1843 15.6905 10.7615C15.9401 11.3387 16.0405 11.9694 15.9826 12.5955C15.9246 13.2217 15.7101 13.8233 15.3588 14.3448C15.0075 14.8664 14.5306 15.2913 13.9722 15.5803C13.4137 15.8694 12.7914 16.0133 12.1628 15.9989C11.5341 15.9846 10.9191 15.8123 10.3744 15.498C10.2021 15.3983 10.0765 15.2342 10.0253 15.0419C9.97396 14.8496 10.0012 14.6448 10.1009 14.4725C10.2006 14.3003 10.3647 14.1747 10.557 14.1234C10.7493 14.0721 10.9541 14.0993 11.1264 14.199C11.4699 14.3969 11.8595 14.5005 12.2559 14.4993C12.6523 14.4982 13.0413 14.3923 13.3837 14.1925C13.726 13.9927 14.0095 13.706 14.2054 13.3614C14.4013 13.0168 14.5027 12.6266 14.4993 12.2302C14.496 11.8338 14.3879 11.4454 14.1862 11.1042C13.9845 10.763 13.6961 10.4811 13.3505 10.2871C13.0048 10.0932 12.614 9.99396 12.2176 9.99956C11.8213 10.0052 11.4335 10.1154 11.0934 10.319C11.009 10.3699 10.9153 10.4037 10.8179 10.4183C10.7204 10.433 10.621 10.4283 10.5253 10.4045C10.4297 10.3808 10.3396 10.3384 10.2604 10.2798C10.1811 10.2212 10.1142 10.1475 10.0634 10.063L7.10739 5.13603C7.05655 5.05154 7.02287 4.95786 7.00827 4.86035C6.99367 4.76284 6.99844 4.6634 7.02231 4.56773C7.04618 4.47207 7.08868 4.38204 7.14738 4.30282C7.20608 4.22359 7.27982 4.15672 7.36439 4.10603V4.10703Z"
          fill="white"
        />
        <path
          d="M2.90049 9.27602C2.99974 9.4483 3.02652 9.65293 2.97496 9.84495C2.92339 10.037 2.79769 10.2006 2.62549 10.3C2.2835 10.4975 1.9995 10.7814 1.80202 11.1234C1.60454 11.4654 1.50055 11.8533 1.50049 12.2482C1.50042 12.6431 1.60429 13.0311 1.80166 13.3731C1.99903 13.7151 2.28294 13.9992 2.62486 14.1968C2.96679 14.3943 3.35469 14.4984 3.74959 14.4986C4.14448 14.4987 4.53246 14.395 4.87455 14.1977C5.21664 14.0004 5.50077 13.7166 5.69841 13.3747C5.89605 13.0328 6.00023 12.6449 6.00049 12.25C6.00036 12.1514 6.01966 12.0538 6.05729 11.9627C6.09492 11.8716 6.15015 11.7888 6.2198 11.719C6.28946 11.6493 6.37218 11.594 6.46324 11.5562C6.5543 11.5185 6.65191 11.499 6.75049 11.499H12.2505C12.4494 11.499 12.6402 11.578 12.7808 11.7187C12.9215 11.8593 13.0005 12.0501 13.0005 12.249C13.0005 12.4479 12.9215 12.6387 12.7808 12.7794C12.6402 12.92 12.4494 12.999 12.2505 12.999H7.42549C7.30038 13.613 7.02348 14.1858 6.62007 14.6652C6.21666 15.1446 5.69959 15.5153 5.11607 15.7434C4.53255 15.9716 3.90117 16.05 3.27957 15.9714C2.65797 15.8928 2.06595 15.6598 1.55757 15.2936C1.0492 14.9274 0.640651 14.4396 0.369237 13.8749C0.0978231 13.3102 -0.027812 12.6865 0.00380202 12.0608C0.035416 11.435 0.223272 10.8272 0.550219 10.2927C0.877166 9.7582 1.33279 9.31414 1.87549 9.00102C2.04764 8.90169 2.25218 8.87475 2.44419 8.92613C2.63619 8.9775 2.79995 9.10299 2.89949 9.27502L2.90049 9.27602Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_935_1388">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Copy() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.55566 2.7C1.55566 2.03726 2.09292 1.5 2.75566 1.5H8.75566C9.41841 1.5 9.95566 2.03726 9.95566 2.7V5.1H12.3557C13.0184 5.1 13.5557 5.63726 13.5557 6.3V12.3C13.5557 12.9627 13.0184 13.5 12.3557 13.5H6.35566C5.69292 13.5 5.15566 12.9627 5.15566 12.3V9.9H2.75566C2.09292 9.9 1.55566 9.36274 1.55566 8.7V2.7ZM6.35566 9.9V12.3H12.3557V6.3H9.95566V8.7C9.95566 9.36274 9.41841 9.9 8.75566 9.9H6.35566ZM8.75566 8.7V2.7L2.75566 2.7V8.7H8.75566Z"
        fill="#232323"
      />
    </svg>
  );
}

export function Spinner() {
  return (
    <svg
      class={tw`inline animate-spin`}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 7C1 7 1 7 1 7C1 10.3137 3.68629 13 7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C6.99999 1 6.99997 1 6.99996 1V3C6.99997 3 6.99999 3 7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 7 3 7 3 7H1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StatusOK() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="9" cy="9" r="9" fill="#20B44B" />
      <path
        d="M5.5 9.22727L7.6875 11.5L12.5 6.5"
        stroke="#2FA850"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function Plus() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.75"
        y1="7"
        x2="12.25"
        y2="7"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="7"
        y1="1.75"
        x2="7"
        y2="12.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function Minus(props: { class?: string }) {
  return (
    <svg
      class={tw(props.class ?? "")}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.75"
        y1="7"
        x2="12.25"
        y2="7"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function Deno(props: { class?: string }) {
  return (
    <svg
      class={tw(props.class ?? "")}
      width="41"
      height="12"
      viewBox="0 0 41 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.784546 11.4113V0.400024H5.07893C6.78829 0.400024 8.18829 0.924369 9.27893 1.97306C10.3801 3.01126 10.9306 4.31163 10.9306 5.87418V5.90564C10.9306 7.47868 10.3801 8.78954 9.27893 9.83823C8.18829 10.8869 6.78829 11.4113 5.07893 11.4113H0.784546ZM3.20702 9.22474H5.07893C6.0647 9.22474 6.8617 8.92062 7.46994 8.31238C8.08867 7.70414 8.39803 6.91238 8.39803 5.9371V5.90564C8.39803 4.93036 8.08867 4.13336 7.46994 3.51463C6.8617 2.89591 6.0647 2.58654 5.07893 2.58654H3.20702V9.22474Z"
        fill="currentColor"
      />
      <path
        d="M16.8331 11.6C15.5537 11.6 14.4997 11.1963 13.6713 10.3888C12.8428 9.57081 12.4286 8.52212 12.4286 7.24272V7.21126C12.4286 5.98429 12.8218 4.94609 13.6083 4.09665C14.3949 3.24722 15.3911 2.8225 16.5971 2.8225C17.9289 2.8225 18.9462 3.26295 19.6488 4.14385C20.3514 5.02474 20.7027 6.11014 20.7027 7.40002C20.7027 7.52587 20.6922 7.73561 20.6713 8.02924H14.8038C14.9192 8.56407 15.1552 8.97306 15.5117 9.25621C15.8683 9.53935 16.3192 9.68092 16.8645 9.68092C17.6091 9.68092 18.2907 9.39253 18.9095 8.81576L20.278 10.027C19.4286 11.0757 18.2802 11.6 16.8331 11.6ZM14.7724 6.53486H18.3746C18.3012 5.98954 18.1072 5.55433 17.7926 5.22924C17.4885 4.90414 17.09 4.7416 16.5971 4.7416C16.1147 4.7416 15.711 4.90414 15.3859 5.22924C15.0713 5.54385 14.8668 5.97905 14.7724 6.53486Z"
        fill="currentColor"
      />
      <path
        d="M22.4847 11.4113V2.9798H24.8757V4.17531C25.5783 3.27343 26.4015 2.8225 27.3453 2.8225C28.2472 2.8225 28.9498 3.1004 29.4532 3.6562C29.9566 4.21201 30.2083 4.97755 30.2083 5.95283V11.4113H27.8173V6.70789C27.8173 6.15208 27.6914 5.72737 27.4397 5.43373C27.188 5.1401 26.8315 4.99328 26.3701 4.99328C25.9086 4.99328 25.5416 5.1401 25.2689 5.43373C25.0068 5.72737 24.8757 6.15208 24.8757 6.70789V11.4113H22.4847Z"
        fill="currentColor"
      />
      <path
        d="M39.6787 10.3259C38.8083 11.1753 37.7229 11.6 36.4225 11.6C35.1221 11.6 34.0367 11.1805 33.1663 10.3416C32.3064 9.49216 31.8764 8.4592 31.8764 7.24272V7.21126C31.8764 5.98429 32.3116 4.94609 33.182 4.09665C34.0629 3.24722 35.1536 2.8225 36.4539 2.8225C37.7543 2.8225 38.8345 3.24722 39.6944 4.09665C40.5648 4.93561 41 5.96332 41 7.1798V7.21126C41 8.43823 40.5596 9.47643 39.6787 10.3259ZM36.4539 9.53935C37.1146 9.53935 37.6442 9.31913 38.0427 8.87868C38.4412 8.43823 38.6405 7.89291 38.6405 7.24272V7.21126C38.6405 6.57156 38.4307 6.02624 38.0113 5.57531C37.6023 5.11388 37.0727 4.88317 36.4225 4.88317C35.7618 4.88317 35.2322 5.1034 34.8337 5.54385C34.4352 5.98429 34.236 6.52961 34.236 7.1798V7.21126C34.236 7.85096 34.4405 8.40152 34.8495 8.86295C35.2689 9.31388 35.8038 9.53935 36.4539 9.53935Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Module() {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.66663 1.71973H13V7.05306H7.66663V1.71973ZM8.99996 3.05306H11.6666V5.71973H8.99996V3.05306Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3333 13.7191V8.38574H6.33333V4.38574H1V13.7191H10.3333ZM5 5.71908H2.33333V8.38574H5V5.71908ZM2.33333 12.3857V9.71908H5V12.3857H2.33333ZM6.33333 12.3857V9.71908H9V12.3857H6.33333Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Manual() {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33333 1.93359H11.6667C12.0203 1.93359 12.3594 2.07407 12.6095 2.32412C12.8595 2.57417 13 2.91331 13 3.26693V12.6003C13 12.9539 12.8595 13.293 12.6095 13.5431C12.3594 13.7931 12.0203 13.9336 11.6667 13.9336H2.33333C1.97971 13.9336 1.64057 13.7931 1.39052 13.5431C1.14048 13.293 1 12.9539 1 12.6003V3.26693C1 2.91331 1.14048 2.57417 1.39052 2.32412C1.64057 2.07407 1.97971 1.93359 2.33333 1.93359ZM3.66667 4.60026V5.93359H10.3333V4.60026H3.66667ZM3.66667 7.26693V8.60026H10.3333V7.26693H3.66667ZM3.66667 9.93359V11.2669H8.33333V9.93359H3.66667Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LongArrowRight(props: { class?: string }) {
  return (
    <svg
      class={tw(props.class ?? "")}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M9.93154 2.9315C9.69304 2.69299 9.30651 2.69246 9.06734 2.9303C8.8271 3.16921 8.82671 3.55786 9.06648 3.79725L11.6463 6.37299L0.631096 6.37299C0.284808 6.37299 0.00408718 6.65371 0.00408718 7C0.00408718 7.34629 0.284809 7.62701 0.631096 7.62701L11.6463 7.62701L9.06597 10.2074C8.82662 10.4467 8.8277 10.8351 9.06839 11.0731C9.30717 11.3093 9.69185 11.3082 9.92931 11.0707L13.6465 7.35355C13.8418 7.15829 13.8418 6.84171 13.6465 6.64645L9.93154 2.9315Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Playground(props: { class?: string }) {
  return (
    <svg
      class={tw(props.class ?? "")}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM7.35097 3.81833C7.52678 3.44327 7.36525 2.99671 6.9902 2.82091C6.61515 2.6451 6.16859 2.80662 5.99278 3.18167L4.35216 6.68167C4.24326 6.91398 4.26067 7.18582 4.3983 7.40234C4.53593 7.61886 4.77469 7.75 5.03125 7.75H7.78888L6.64903 10.1817C6.47322 10.5567 6.63475 11.0033 7.0098 11.1791C7.38485 11.3549 7.83141 11.1934 8.00722 10.8183L9.64784 7.31833C9.75674 7.08602 9.73933 6.81418 9.6017 6.59766C9.46407 6.38114 9.22531 6.25 8.96875 6.25H6.21112L7.35097 3.81833Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ExternalLink(props: { class?: string }) {
  return (
    <svg
      class={tw(props.class ?? "")}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.19053 3.23803C4.19053 2.71204 4.61692 2.28564 5.14291 2.28564L12.762 2.28565C13.2879 2.28565 13.7143 2.71204 13.7143 3.23803L13.7143 10.8571C13.7143 11.3831 13.2879 11.8095 12.762 11.8095C12.236 11.8095 11.8096 11.3831 11.8096 10.8571L11.8096 5.53728L3.91158 13.4353C3.53965 13.8072 2.93664 13.8072 2.56471 13.4353C2.19278 13.0633 2.19278 12.4603 2.56471 12.0884L10.4627 4.19041L5.14291 4.19041C4.61692 4.19041 4.19053 3.76401 4.19053 3.23803Z"
        fill="currentColor"
      />
    </svg>
  );
}
