3akai-ux-contrib - Sakai 3 UX/UI Contrib Widgets
================================================

This is an area in which Contrib Widgets for Sakai 3 can be stored
and maintained.

Please send the maintainers of this repository a message if you would
like to get commit access into this repository.

To use Contrib widgets, check out this repository and place it in a folder
on your hard drive. Now go to the Sling console > Configuration and use
the FsResourceProvider to map /contrib to your checked out folder. Now also
change the configuration of the Widgetize servlet to include /contrib for
the widget file aggregation.