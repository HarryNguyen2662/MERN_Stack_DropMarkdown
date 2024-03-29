import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface IProps{
    confirmDelete:()=>void;
    cancelDelete:()=>void;
    isDelete:boolean;
}
export const DeleteConfirmation = ({confirmDelete,
cancelDelete, isDelete}:IProps)=>{

return (
  <Transition appear show={isDelete} as={Fragment}>
    <Dialog as="div" className="relative z-10 bg-black/75" onClose={cancelDelete}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900">
                Delete this document?
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this document and
                  its contents? This action cannot be reversed.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent bg-primary-orange px-4 py-2 text-sm font-medium text-white hover:bg-secondary-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={confirmDelete}>
                  Confirm & Delete
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);
}