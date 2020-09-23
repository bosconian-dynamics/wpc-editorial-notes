import { RichText } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';

const META_KEY = 'wpc_editorial_notes';

const NoteEditor = () => {
  const meta = useSelect(
    select => select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {}
  );
  const { editPost } = useDispatch( 'core/editor' );
  const [ notes, setNotes ] = useState( meta[META_KEY] );

  useEffect(
    () => {
      editPost({
        meta: {
          ...meta,
          [META_KEY]: notes
        }
      })
    },
    [ notes ]
  );

  return (
    <>
      <RichText
        placeholder='Add notes...'
        value={notes}
        onChange={setNotes}
      />
    </>
  );
}

export default NoteEditor;