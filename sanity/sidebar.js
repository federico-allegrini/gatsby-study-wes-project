import React, { Component } from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdHome } from 'react-icons/md';

// Build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // Create anew sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <MdHome />)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // Make a new document ID, so we don't have a random string of numbers
            .documentId('downtown')
        ),
      // Add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
